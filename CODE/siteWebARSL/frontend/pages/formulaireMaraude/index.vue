
<template>
  <div>
  <b-card no-body>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
      <b-form-group id="textarea-group-1" label="Information Famille :" label-for="textarea-1">
        <b-form-textarea
              id="textarea-1"
              v-model="form.infoFamille"
              placeholder="Information famille..."
              rows="4"
              max-rows="8"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group id="input-group-5" label="Lieu de rencontre :" label-for="input-5">
        <b-form-input
        id="input-5"
        v-model="form.lieu"
        placeholder="Lieu de rencontre..."
        ></b-form-input>
      </b-form-group>
      </b-tab>
      <b-tab title="Santé">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
      <b-tab title="Hébergement">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
      </b-tabs>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

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
