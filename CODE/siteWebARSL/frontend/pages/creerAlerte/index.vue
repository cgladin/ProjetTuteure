<template>
  <div>

    <div class="text-center my-2">
      <h1>Lancer une alerte</h1>
      <hr>
    </div>

    <div class="d-flex flex-column bd-highlight mb-3 align-items-center">

      <div class="p-2 bd-highlight">

        <div>
          <p>Titre de l'alerte :</p>
          <input  class="ml-2" type="text" id="titre" name="titre_alerte" required size="30" placeholder="Rentrez le titre de l'alerte">
        </div>

        <br>

        <div>
          <p>Description :</p>
          <textarea  class="ml-2" rows="5" cols="40" id="description" name="description_alerte" placeholder="Rentrez votre descrition ici...">
          </textarea>
        </div>

      </div>

      <div class="p-2 bd-highlight">
        <a class="btn btn-success btn-lg" @click="showModal1">Envoyer</a>
        <a class="btn btn-outline-danger btn-lg">Retour</a>

        <b-modal ref="modal-1" hide-footer title="Envoyer cette alerte ?" button-size="lg" no-stacking>
          <div class="d-block text-center">
            <script>
              var titre_js = document.getElementById('titre').value;
              document.getElementById('titre_dans_alert').innerHTML = titre_js;
            </script>
            <p class="font-weight-bold"><span id="titre_dans_alert"></span></p>
            <hr>
            <script>
              var description_js = document.getElementById('description').value;
              document.getElementById('description_dans_alert').innerHTML = description_js;
            </script>
            <p><span id="description_dans_alert"></span></p>
          </div>
          <b-button class="mt-2" variant="outline-success" block @click="showModal2">Envoyer</b-button>
          <b-button class="mt-2" variant="outline-danger" block @click="hideModal1">Annuler</b-button>
        </b-modal>

        <b-modal ref="modal-2" hide-footer title="Alerte envoyée" button-size="lg">
          <div class="d-block text-center">
            <p class="my-4">Votre alerte a été correctement envoyée !</p>
          </div>
          <b-button class="mt-2" variant="outline-success" block @click="hideModal2">OK</b-button>
        </b-modal>

      </div>

    </div>

  </div>
</template>


<script>

  export default {
    methods: {
      showModal1() {
        this.$refs['modal-1'].show()
      },
      showModal2() {
        this.$refs['modal-2'].show()
      },
      hideModal1() {
        this.$refs['modal-1'].hide()
      },
      hideModal2() {
        this.$refs['modal-2'].hide()
      }
    }
  }
</script>


<style>
  h1{
    font-family: OfficinaSansStd-Book, sans-serif;
    color: #f26340 ;
  }
</style>
