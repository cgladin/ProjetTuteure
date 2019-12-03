<template>
<div>
  <div class="title">
      <h1> Vous rencontrez des difficultés sociales ? (absence ou perte de logement, violences conjugales, expulsions...) </h1>
      <h2> Appelez le 115. </h2>
      <img src="115.png" alt="115">
  </div>
  <div class="body">

    <div id="carte">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68101.40696834163!2d1.2760437400135942!3d45.833428906473266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1575379528277!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div>
      <h2> Liste des Lieux :</h2>
      <div>
        <h3>Accueil de jour</h3>
        <div>
          <!-- Un accueil de jour avec description-->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
<style>

.title {
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title h1,h2{

  color: ;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
