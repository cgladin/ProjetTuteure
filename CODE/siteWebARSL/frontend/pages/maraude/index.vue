<template>
    <div>
        <div class="mt-4 text-center">
            <h1>Ensemble des maraudes présentes sur Limoges</h1>
        </div>

        <b-row cols="2">
        <b-col>
        <h2> Maraude non terminée </h2>
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" v-for="maraude in filteredList" v-bind:key="maraude" uk-grid>
            <div v-if="maraude.maraudeTerminee  === false">
               <div class="uk-card-body">
                  <h3 class="uk-card-title">{{ maraude.nomGroupe }}</h3>
                  <p>{{ maraude.trajet.lieuDepart }}</p>
                  <p>{{ maraude.trajet.lieuArrivee }}</p>
                </div>
            </div>
        </div>
      </b-col>
      <b-col>
        <h2> Maraude terminée </h2>
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" v-for="maraude in filteredList" v-bind:key="maraude" uk-grid>
            <div v-if="maraude.maraudeTerminee  === true">
               <div class="uk-card-body">
                  <h3 class="uk-card-title">{{ maraude.nomGroupe }}</h3>
                  <p>{{ maraude.trajet.lieuDepart }}</p>
                  <p>{{ maraude.trajet.lieuArrivee }}</p>
                </div>
            </div>
        </div>
      </b-col>
    </b-row>
    </div>

</template>

<script>
   import maraudesQuery from '~/apollo/queries/maraude/maraudes'

   export default {
     data() {
       return {
         maraudes: [],
         query: ''
       }
     },
     apollo: {
       maraudes: {
         prefetch: true,
         query: maraudesQuery
       }
     },
     computed: {

       filteredList() {
         return this.maraudes.filter(maraude => {
           return maraude.nomGroupe.toLowerCase().includes(this.query.toLowerCase())
         })
       },
     }
   }
</script>

<style>
    .card{
        width:98%;
        margin:auto;
    }
    td{
        background-color:#C0C0C0;
    }
    td, th{
        text-align:center;
    }
    #titre{
        margin-top:4%;
    }
    #picto_manger{
      width: 50px;
      height: 50px;
    }
    #picto_dormir{
      width: 50px;
      height: 50px;
    }
    #picto_douche{
      width: 50px;
      height: 50px;
    }
</style>






















<!--
<template>
    <div>

        <div id="title">
            <h1 id="titre"> Ajouter un lieu d'accueil </h1>
        </div>

        <div class=".align-content-center">
            <form class="vertical">
                <div class="span5">
                <fieldset>
                    <legend>Information du lieu</legend>
                    <div class="control-group">
                        <label class="control-label" for="input01">Association responsable :</label>
                        <div class="controls">
                            <div class="form-group">
                                <select class="form-control" id="sel1" style="width:auto;">
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
                            <input type="time" name="time" class="timehour">
                            <p class="help-block">A quelle heure le lieu ouvre au publique</p>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="input01">Heure de fermeture :</label>
                        <div class="controls">
                            <input type="time" name="time" class="timehour">
                            <p class="help-block">A quelle heure le lieu ferme au publique</p>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="input01">Adresse postale :</label>
                        <div class="controls">
                            <textarea class="form-control" rows="2" id="comment" style="width:auto;"></textarea>
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
    .input-xlarge{
        border-radius:3px;
    }
    .timehour{
        border-radius:3px;
    }
    .form-control{
        border-radius:3px;
    }
    .control-group{
        margin-bottom:25px;
    }
    #titre{
        margin-top:5%;

    }
</style>

-->
