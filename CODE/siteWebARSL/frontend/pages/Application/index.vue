<template>
  <div>
    <div class="text-center my-2">
    <h1> Application </h1>
    <hr>
  </div>
  <div class="my-auto">
    <b-row class="my-4" align-h="around">
      <b-col cols="4"><b-button class="appButton" block variant="secondary">Formulaire</b-button></b-col>
      <b-col cols="4"><b-button class="appButton" block variant="secondary">Maraudes</b-button></b-col>
    </b-row>
    <b-row class="my-4" align-h="around">
      <b-col cols="4"><b-button class="appButton" block >Créer Groupes Maraudes</b-button></b-col>
      <b-col cols="4"><b-button class="appButton" block variant="secondary">Annonces</b-button></b-col>
    </b-row>
    <b-row class="my-4" align-h="around">
      <b-col cols="4"><b-button class="appButton" block variant="secondary">Trajet</b-button></b-col>
      <b-col cols="4"><b-button class="appButton" block variant="secondary">Lieux</b-button></b-col>
    </b-row>
    <b-row class="my-4" align-h="around">
      <b-col cols="4"><b-button class="appButton" block variant="secondary">Signaler Personne</b-button></b-col>
      <b-col cols="4"><b-button class="appButton" block variant="secondary">Statistique</b-button></b-col>
    </b-row>
  </div>
  </div>
</template>

<script>

</script>

<style>
.appButton{
  height:100px;
  background-color: #689a9f;
  font-family: OfficinaSansStd-Book, sans-serif;
  font-weight:bold;
}
h1,h2{
font-family: OfficinaSansStd-Book, sans-serif;
color: #f26340 ;
}
b-col {
  height:100px;

}
</style>
