<template>
    <div>
        <div class="row text-center" id="titre">
            <div class="col-sm-3 ml-auto mr-auto">
                <h1>Liste des lieux d'accueil</h1>
            </div>
        </div>

        <div class="card text-center" id="carte" v-for="lieu in filteredList" v-bind:key="lieu" uk-grid>
                <div class="card-body">
                    <h3 class="card-title">{{ lieu.nom }}</h3>
                    <p>Responsable :    {{ lieu.association.nom }}
                    <p>{{ lieu.description }}</p>
                    <p>{{ lieu.adressePostale }}</p>
                    <p>Animaux autorisés :   {{ lieu.animaux }}</p>
                    <section class="col-sm-8 table-responsive rounded">
                        <table class="table table-condensed">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">Lundi</th>
                                <th scope="col">Mardi</th>
                                <th scope="col">Mercredi</th>
                                <th scope="col">Jeudi</th>
                                <th scope="col">Vendredi</th>
                                <th scope="col">Samedi</th>
                                <th scope="col">Dimanche</th>  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">Matin</th>
                                <td class="border-left border-white">{{ lieu.HoraireMatinLundi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireMatinMardi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireMatinMercredi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireMatinJeudi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireMatinVendredi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireMatinSamedi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireMatinDimanche }}</td>
                                </tr>
                                <tr>
                                <th scope="row">Après-midi</th>
                                <td class="border-left border-white">{{ lieu.HoraireApremLundi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireApremMardi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireApremMercredi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireApremJeudi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireApremVendredi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireApremSamedi }}</td>
                                <td class="border-left border-white">{{ lieu.HoraireApremDimanche }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            
        </div>
    </div>

</template>



<script>
// Import the lieux query
import lieusQuery from '~/apollo/queries/lieu/lieux.gql'

export default {
  data() {
    return {
      // Initialize an empty restaurants variabkle
      lieus: [],
      query: ''
    }
  },
  apollo: {
    lieus: {
      prefetch: true,
      query: lieusQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.lieus.filter(lieu => {
        return lieu.nom.toLowerCase().includes(this.query.toLowerCase())
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
