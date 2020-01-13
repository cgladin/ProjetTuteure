<template>
    <div>
        <div id="title">
            <h1> Ajouter un lieu d'accueil </h1>
        </div>

        <div class=".align-content-center">
            <form class="vertical">
                <div class="span6">
                <fieldset>
                <legend>Information du lieu</legend>
                <div class="control-group">
                    <label class="control-label" for="input01">Association responsable :</label>
                    <div class="controls">
                        <div class="form-group">
                            <select class="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                         </div> 
                    <p class="help-block">Selectionner l'association qui est responsable du lieu d'accueil</p>
                    </div>
                </div>
                    <div class="control-group">
                    <label class="control-label" for="input01">Nom du lieu :</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="input01">
                        <p class="help-block">Supporting help text</p>
                    </div>
                    </div>
                    <div class="control-group">
                    <label class="control-label" for="input01">Text input</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="input01">
                        <p class="help-block">Supporting help text</p>
                    </div>
                    </div> 
                    <div class="control-group">
                    <label class="control-label" for="input01">Text input</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="input01">
                        <p class="help-block">Supporting help text</p>
                    </div>
                    </div>   
                    <div class="control-group">
                    <label class="control-label" for="input01">Text input</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="input01">
                        <p class="help-block">Supporting help text</p>
                    </div>
                    </div>           
                </fieldset>
                </div>
                
            </form>
        </div>
        
        
        
        
        <div id="body">
            <div class="flex-column">
                <label>Association responsable :</label>
                <label>Nom du lieu :</label>
                <label>Heure d'ouverture :</label>
                <label>Heure de fermeture :</label>
                <label>Adresse postale :</label>
            </div>
        </div>
    </div>
</template>


