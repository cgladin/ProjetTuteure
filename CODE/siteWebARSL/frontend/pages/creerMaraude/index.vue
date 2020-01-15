
<template>
  <div>
  <b-card>
        <h1 class="text-align-center mt-3 text-center"> Nouvelle maraude </h1>
        <b-form id="creerMaraude" @submit="onSubmit" @reset="onReset" v-if="show">
          <b-tabs card fill>
            <b-tab title="Formulaire" active>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="input-group-1" label="Nom de maraude :" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.nom"
                  type="text"
                  required
                  placeholder="Nom de maraude..."
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Heure de départ :" label-for="input-2">
                <b-form-input
                  id="input-2"
                  type="date"
                  v-model="form.dateDepart"
                  required
                  placeholder="Heure de départ..."
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-1" label="Lieu de départ :" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.lieu"
                  type="text"
                  required
                  placeholder="Lieu de départ..."
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Heure d'arrivée :" label-for="input-3">
                <b-form-input
                  id="input-2"
                  type="date"
                  v-model="form.dateArrivee"
                  required
                  placeholder="Heure d'arrivée'..."
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-1" label="Lieu d'arrivée' :" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.lieu"
                  type="text"
                  required
                  placeholder="Lieu d'arrivée'..."
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Personnes présentes :" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.personnes"
                  :options="personnes"
                  required
                  placeholder="Choisir une personne..."
                ></b-form-select>
              </b-form-group>
            </b-form>
      </b-form-group>
      </b-tab>

      </b-tabs>
      <div id="valider" class="d-flex justify-content-center ">
        <b-button type="submit" variant="primary">Créer la nouvelle maraude</b-button>
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
          personnes: null,
          checked: []
        },
        personnes: [{ text: 'Choisir une personne...', value: 'null' }, 'Patricia', 'Stéphane', 'Michel', 'Thomas', 'Frédéric'],
        show: true,
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
    },
  }
</script>
