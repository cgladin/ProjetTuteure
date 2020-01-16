var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
	fs = require('fs');

var onlineMembers = [];
var allMembersIds = {};
var allMembersState = {};
var lastMsgPseudo = null;
var lastConnMemberPseudo = null;

initAllMembersIdsAndStates();
initLastMsgPseudo();

app.get('/', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");

	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	
	if(allMembersIds.hasOwnProperty(req.query.pseudo) && allMembersIds[req.query.pseudo] != ip){
		res.status(403).send('Pseudo already in use !');
		return;
	}
	
	lastConnMemberPseudo = req.query.pseudo;
	res.sendFile(__dirname + '/tchat.html');
});

io.sockets.on('connection', (socket)=>{
	
	if( ! welcomeMember(socket, lastConnMemberPseudo) ){
		return;
	}
	
	socket.on('newMessage', (message, messageDT)=>{
		
		for(var i=0; i<onlineMembers.length; i++)
			onlineMembers[i].emit("newMessage", socket.pseudo, message, messageDT);
		
		var msg_save = "m"+messageDT+message+"\n";

		if(lastMsgPseudo != socket.pseudo)
			msg_save = "p"+socket.pseudo+"\n"+msg_save;
		
		lastMsgPseudo = socket.pseudo;
		
        fs.appendFile('chat.txt', msg_save, function (err) {
			if (err) throw err;						
		});				
    });	
	
	socket.on('disconnect', ()=>{
      var i = onlineMembers.indexOf(socket);
      onlineMembers.splice(i, 1);
	  
	  allMembersState[socket.pseudo] = false;
	  
	  brodcastMembersInfo();
	  
	  log(socket.pseudo+"["+socket.conn.remoteAddress+"]: has left the Chat Room", YELLOW);
   });
   
});

server.listen(8080, '0.0.0.0', ()=>{
	log("\n");
	log(">>  Chat Room 1.0 is know open on port 8080  <<", CYAN);
});

function initAllMembersIdsAndStates(){
	fs.readFile('members.txt', 'utf-8', function(err, members) {
		if(members != null){
			var membersIdsList = members.split('\n');
			for(var i=0; i<membersIdsList.length; i++){
				
				if(membersIdsList[i].length <= 1)
					continue;
				
				var ip = '', pseudo = '';
				for(var j=0; j<membersIdsList[i].length; j++){
					if(pseudo.length == 0 && membersIdsList[i][j] != ',')
						ip += membersIdsList[i][j];
					else
						pseudo += membersIdsList[i][j];
				}
				
				pseudo = pseudo.substr(1);
				allMembersIds[pseudo] = ip;
				allMembersState[pseudo] = false;
			}
		}
	});	
}

function initLastMsgPseudo(){
	fs.readFile('chat.txt', 'utf-8', function(err, chatSave) {
		if(chatSave != null){
			var chatSaveList = chatSave.split('\n');
			for(var i=chatSaveList.length-1; i--; i>=0)
				if(chatSaveList[i][0] == 'p'){
					lastMsgPseudo = chatSaveList[i].replace('p','');
					break;
				}
		}
	});	
}


function welcomeMember(socket, pseudo){
	
	if(pseudo == null)
		return false;
	
	// Add member info to members.txt
	var pseudoExists = allMembersIds.hasOwnProperty(pseudo);
	
	if(!pseudoExists){
		var memberId = socket.conn.remoteAddress + ',' + pseudo;
	
		allMembersIds[pseudo] = socket.conn.remoteAddress;
		fs.appendFile('members.txt', memberId+'\n', (error)=>{});	
	}
	
	//Add pseudo as an attribute to socket dict
	socket.pseudo = pseudo;
		
	console.log(pseudo);
	onlineMembers.push(socket);	
	
	allMembersState[pseudo] = true;

	brodcastMembersInfo();
	
	fs.readFile('chat.txt', 'utf-8', function(err, chatSave) {
		socket.emit("loadChat", chatSave);
	});	
	
	log(socket.pseudo+"["+socket.conn.remoteAddress+"]: has joined the Chat Room", GREEN);
	
	return true;
}

function brodcastMembersInfo(){
	var onlineMembersCt = onlineMembers.length;
	for(var i=0; i<onlineMembersCt; i++)
		onlineMembers[i].emit("loadMembersInfo", allMembersState, onlineMembersCt);
}

var RESET = "\x1b[0m";
var GREEN = "\x1b[32m"
var YELLOW = "\x1b[33m";
var CYAN = "\x1b[36m";

function log(msg, color = RESET){
	console.log(color, msg);
}