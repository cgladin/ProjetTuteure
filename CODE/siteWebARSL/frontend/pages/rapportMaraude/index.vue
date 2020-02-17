<template>
   <div>
      <b-card>
         <h1 class="text-align-center mt-3 text-center"> Rapport de fin de maraude </h1>
         <b-form id="formulaireMaraude" @submit="onSubmit" @reset="onReset" v-if="show">
               <b-tab active>

                  <b-form-group id="input-group-1">
                    <p class="h4"> Ensemble des formulaires de maraude : </p>
                      <b-row class="ml-3">
                        <div>
                          <img src="/erreur.png">
                        </div>
                        <div class="ml-1">
                          <img src="/modifier.png">
                        </div>
                        <b-card no-body class="w-25 ml-1">
                          <div class="bg-secondary text-light mb-1 ">
                            formulaire0001.pdf
                          </div>
                        </b-card>
                      </b-row>
                      <b-row class="ml-3">
                        <div>
                          <img src="/erreur.png">
                        </div>
                        <div class="ml-1">
                          <img src="/modifier.png">
                        </div>
                        <b-card no-body class="w-25 ml-1">
                          <div class="bg-secondary text-light mb-1 ">
                            formulaire0002.pdf
                          </div>
                        </b-card>
                      </b-row>
                      <b-row class="ml-3">
                        <div>
                          <img src="/erreur.png">
                        </div>
                        <div class="ml-1">
                          <img src="/modifier.png">
                        </div>
                        <b-card no-body class="w-25 ml-1">
                          <div class="bg-secondary text-light mb-1 ">
                            formulaire0003.pdf
                          </div>
                        </b-card>
                      </b-row>
                      <b-row class="ml-3">
                        <div>
                          <img src="/erreur.png">
                        </div>
                        <div class="ml-1">
                          <img src="/modifier.png">
                        </div>
                        <b-card no-body class="w-25 ml-1">
                          <div class="bg-secondary text-light mb-1 ">
                            formulaire0004.pdf
                          </div>
                        </b-card>
                      </b-row>
                  </b-form-group>
                  <b-form-group id="input-group-2">
                    <p class="h4"> Commentaires : </p>
                    <b-form-textarea
                      id="textarea-default"
                      placeholder="Commentaires sur la maraude..."
                    ></b-form-textarea>
                  </b-form-group>
               </b-tab>
            <div id="valider" class="d-flex justify-content-center ">
               <b-button type="submit" variant="primary">Valider le rapport</b-button>
            </div>
         </b-form>
      </b-card>
   </div>
</template>
<script>
   export default {
     data() {
       return {
         form: {
         },
         show: true
       }
     },
     methods: {
       onSubmit(evt) {
         evt.preventDefault()
         alert(JSON.stringify(this.form))
       },
     }
   }
</script>
