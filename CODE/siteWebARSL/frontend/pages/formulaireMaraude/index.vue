
<template>
  <div>
  <b-card>
        <h1 class="text-align-center mt-3 text-center"> Formulaire de maraude pour personne rencontrée </h1>
        <b-form id="formulaireMaraude" @submit="onSubmit" @reset="onReset" v-if="show">
          <b-tabs card fill>
            <b-tab title="Identité" active>
      <b-form-group
        id="input-group-1"
        label="Nom :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.nom"
          type="input-1"
          required
          placeholder="Nom de famille..."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Prénom :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.prenom"
          placeholder="Prénom..."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pseudo :" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.pseudo"
          placeholder="Pseudo..."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Nationalité :" label-for="input-4">
        <b-form-input
        id="input-4"
        v-model="form.nationalite"
        placeholder="Nationalité..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Information Famille :" label-for="input-5">
        <b-form-textarea
              id="input-5"
              v-model="form.infoFamille"
              placeholder="Information famille..."
              rows="4"
              max-rows="8"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group id="input-group-6" label="Lieu de rencontre :" label-for="input-6">
        <b-form-input
        id="input-6"
        v-model="form.lieu"
        placeholder="Lieu de rencontre..."
        ></b-form-input>
      </b-form-group>
      </b-tab>
      <b-tab title="Santé">
        <b-form-group id="input-group-7" label="Etat de grossesse :" label-for="input-7">
          <b-form-radio id="input-7" v-model="selected" name="positif" value="true">Positif</b-form-radio>
          <b-form-radio id="input-7" v-model="selected" name="negatif" value="false">Négatif</b-form-radio>
        </b-form-group>
        <b-form-group id="input-group-8" label="Problèmes de santé :" label-for="input-8">
          <b-form-textarea
                id="input-8"
                v-model="form.problemeDeSante"
                placeholder="Problème de santé..."
                rows="4"
                max-rows="8"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-9" label="Autres problèmes :" label-for="input-9">
          <b-form-textarea
                id="input-9"
                v-model="form.autre"
                placeholder="Autres problèmes..."
                rows="4"
                max-rows="8"
          ></b-form-textarea>
        </b-form-group>
      </b-tab>
      <b-tab title="Hébergement">
        <b-form-group id="input-group-10" v-model="form.hebergementActuel" label="Situation actuelle d'hébergement de la personne :" label-for="input-10">
          <b-form-radio v-model="selected" name="true" value="A">Positif</b-form-radio>
          <b-form-radio v-model="selected" name="false" value="B">Négatif</b-form-radio>
        </b-form-group>
        <b-form-group id="input-group-11" v-model="form.dejaConnu" label="La personne est-elle déjà connu de la maraude ?" label-for="input-11">
          <b-form-radio v-model="selected" name="oui" value="true">Oui</b-form-radio>
          <b-form-radio v-model="selected" name="non" value="false">Non</b-form-radio>
        </b-form-group>
        <b-form-group id="input-group-12" v-model="form.demandeHebergement" label="La personne a déjà exprimé une demande d'hébergement ?" label-for="input-12">
          <b-form-radio v-model="selected" name="oui" value="true">Oui</b-form-radio>
          <b-form-radio v-model="selected" name="non" value="false">Non</b-form-radio>
        </b-form-group>
        <b-form-group id="input-group-13" v-model="form.demandeAcceptee" label="Le 115 a t-il répondu positivement à la demande ?" label-for="input-13">
          <b-form-radio v-model="selected" name="oui" value="true">Oui</b-form-radio>
          <b-form-radio v-model="selected" name="non" value="false">Non</b-form-radio>
        </b-form-group>
      </b-tab>
      </b-tabs>
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
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
