<template>
  <div>

    <div class="text-center my-2">
      <h1>Lancer une alerte</h1>
      <hr>
    </div>

    <div class="ml-5">
      <p>Titre de l'alerte</p>
      <input type="text" id="name" name="titre_alerte" required size="10">
    </div>

    <br>

    <div class="ml-5">
      <p>Description</p>
      <input type="text-area" id="name" name="description_alerte" required size="20">
    </div>

    <div class="mx-auto">
      <a class="btn btn-primary btn-lg" href="#">Envoyer</a>
    </div>

  </div>
</template>


<script>

</script>


<style>
  h1{
    font-family: OfficinaSansStd-Book, sans-serif;
    color: #f26340 ;
  }
</style>
