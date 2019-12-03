<template>
<div>
  <div class="title">
      <h1> Vous rencontrez des difficultés sociales ? (absence ou perte de logement, violences conjugales, expulsions...) </h1>
      <div id="appel">
        <h2> Appelez le </h2>
        <img src="115.png" alt="115">
      </div>
  </div>
  <div class="body">

    <div id="carte">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68101.40696834163!2d1.2760437400135942!3d45.833428906473266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1575379528277!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div>
      <h2> Liste des Lieux :</h2>
      <div>
        <h3>Accueil de jour</h3>
        <div class="accueiljour">
          <h3> Secours Catholique </h3>
          <p> 23, Rue Charpentier 87 000 LIMOGES </p>
          <p> 9H-12H  14H-17H </p>
        </div>
        <div class="accueiljour">
          <h3> Secours Populaire</h3>
          <p> 6, Rue Fulton 87 280 LIMOGES</p>
          <p> 14H-18H </p>
        </div>
        <div class="accueiljour">
          <h3> Restos du Coeur</h3>
          <p> 87, Rue du Chinchauvaud 87 100 LIMOGES</p>
          <p> 9H-11H </p>
        </div>
        <div class="accueiljour">
          <h3> Croix Rouge </h3>
          <p>2, rue Montlhéry 87 100 LIMOGES</p>
          <p> 14H-17H </p>
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
  font-family: OfficinaSansStd-Book, sans-serif;
  color: ;
}
#appel{
  display: flex;
  flex-direction: row;
  align-items: center;

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
.accueiljour {
border:  solid 2px;
padding: 5px;
margin-top: 5px;
}

</style>
