<template>
    <div>
        <div id="title">
            <h1 id="titre"> Ajouter un lieu d'accueil </h1>
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
                                <option>Croix rouge</option>
                                <option>recuperer avec strapi</option>
                                <option>aled</option>
                                <option>.....</option>
                            </select>
                         </div> 
                    <p class="help-block">Selectionner l'association qui est responsable du lieu d'accueil</p>
                    </div>
                </div>
                    <div class="control-group">
                    <label class="control-label" for="input01">Nom du lieu :</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="input01">
                        <p class="help-block">Quel nom est communément donné à ce lieu (ex : gymnase Jean Martin)</p>
                    </div>
                    </div>
                    <div class="control-group">
                    <label class="control-label" for="input01">Heure d'ouverture :</label>
                    <div class="controls">
                        <input type="time" name="time" />
                        <p class="help-block">A quelle heure le lieu ouvre au publique</p>
                    </div>
                    </div> 
                    <div class="control-group">
                    <label class="control-label" for="input01">Heure de fermeture :</label>
                    <div class="controls">
                        <input type="time" name="time" />
                        <p class="help-block">A quelle heure le lieu ferme au publique</p>
                    </div>
                    </div>   
                    <div class="control-group">
                    <label class="control-label" for="input01">Adresse postale :</label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" id="input01">
                        <p class="help-block">ex : 27 rue du général de Gaulle, 87000 Limoges France</p>
                    </div>
                    </div>           
                </fieldset>
                </div>
                
            </form>
        </div>
    </div>
</template>

<style>
    .help-block{
        font-size:12px;
    }
    #titre{
        margin-top:4%;
    }
</style>


