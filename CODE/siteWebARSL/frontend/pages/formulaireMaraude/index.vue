<template>
   <div>
      <b-card>
         <h1 class="text-align-center mt-3 text-center"> Formulaire de maraude pour personne rencontrée </h1>
         <b-form id="formulaireMaraude" @submit="onSubmit" @reset="onReset" v-if="show">
               <b-tab active>

                  <b-form-group id="input-group-1" label="Pseudo :" label-for="input-1">
                     <b-form-input
                        id="input-1"
                        type="input-1"
                        required
                        v-model="form.pseudo"
                        placeholder="Pseudo..."
                        ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Langue parlée :" label-for="input-2">
                     <b-form-input
                        id="input-2"
                        v-model="form.langueParlee"
                        placeholder="Nationalité..."
                        ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label="Lieu de rencontre :" label-for="input-3">
                     <b-form-input
                        id="input-3"
                        v-model="form.lieu"
                        placeholder="Lieu de rencontre..."
                        ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-4" label="Information Famille :" label-for="input-4">
                     <b-form-textarea
                        id="input-4"
                        v-model="form.infoFamille"
                        placeholder="Information famille..."
                        rows="4"
                        max-rows="8"
                        ></b-form-textarea>
                  </b-form-group>

                  <b-form-group id="input-group-5" label="Problèmes de santé :" label-for="input-5">
                     <b-form-textarea
                        id="input-5"
                        v-model="form.problemeDeSante"
                        placeholder="Problème de santé..."
                        rows="4"
                        max-rows="8"
                        ></b-form-textarea>
                  </b-form-group>

                  <b-form-group id="input-group-6" label="Situation d'hébergement :" label-for="input-6">
                        <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
                        <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
                  </b-form-group>
                  <b-form-group >

                     <b-form-textarea
                        id="input-6"
                        v-model="form.autre"
                        placeholder="Situation d'hébergement..."
                        rows="4"
                        max-rows="8"
                        ></b-form-textarea>
                  </b-form-group>

               </b-tab>
            <div id="valider" class="d-flex justify-content-center ">
               <b-button type="submit" variant="primary">Valider le formulaire</b-button>
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
           nom: '',
           prenom: '',
           pseudo: '',
           nationalite: '',
           checked: []
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
