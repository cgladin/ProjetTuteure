<template>

<div>

  <header>
    <div>
    <b-carousel
      id="carrousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#000000"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="1.jpg"
      class="text-white img-fluid responsive">
        <h2 class="text-white ordi">Vous rencontrez des difficultés sociales ? (perte de logement, violences conjugales, expulsions...)</h2>
        <h3 class="text-white tel">Vous rencontrez des difficultés sociales ? Appelez le </h3>
        <div>
          <h2 class="ml-md-auto text-white ordi"> Appelez le </h2>
          <img class="ml-auto" id="centquinze" src="/115.png">
        </div>
      </b-carousel-slide>
      <a href="/associations">
      <b-carousel-slide img-src="3.jpg"
      class="text-white img-fluid responsive">
        <h2 id="infoAssoOrdi" class="text-white ordi">Cliquez pour retrouver les informations sur les associations et les lieux d'accueil de jour de Limoges</h2>
        <h3 id="infoAssoTel" class="text-white tel">Cliquez pour des informations sur les associations</h3>
      </b-carousel-slide>
    </a>
    </b-carousel>
  </div>
  </header>

  <div class="row d-flex justify-content-center mb-3" id="carte">
<iframe src="https://www.google.com/maps/d/embed?mid=13QJZSsCv_kAqH-8Pv9OKvU6Cn28S8FRg" width="640" height="480"></iframe> </div>
  <div class="row">
    <div class="col-md-8 mb-5">
      <h2>A propos de l'ARSL</h2>
      <hr>
      <p>L’Association de réinsertion sociale du Limousin est une association
        loi 1901 créée en 1961. Son objet est de lutter contre toutes les
        formes d’exclusion sociale. Elle accueille des personnes en difficulté,
        et les accompagne dans leur démarche d’intégration sociale et de citoyenneté.
        L’ARSL est financée par l’Etat et par le Conseil départemental 87, la ville de Limoges,
        la Caisse d’allocations familiales (CAF), et d’autres organismes. Elle emploie aujourd’hui
        une centaine de salariés.</p>

      <a class="btn btn-primary btn-lg" href="http://www.arsl.eu/">En savoir plus... &raquo;</a>
    </div>
    <div class="col-md-4 mb-5">
      <h2>Contactez-nous</h2>
      <hr>
      <address>
        <strong>Siège social</strong>
        <br>11, Rue de Dion Bouton
        <br>87280 Limoges
        <br>
      </address>
      <address>
        <abbr title="Phone">Téléphone :</abbr>
        05 55 77 57 77
        <br>
        <abbr title="Email">Email :</abbr>
        <a href="mailto:#"> arsl.sapmpm@wanadoo.fr</a>
      </address>
    </div>
  </div>
  <!-- /.row -->

  <b-row>
      <div class="uk-card uk-card-default uk-grid-collapse w-25 m-1 mw-100 col col-lg-2 d-flex align-items-stretch align-content-stretch flex-wrap" v-for="association in filteredList" v-bind:key="association" uk-grid>
        <div class="card ">
          <img class="card-img-top card-sm" :src="'http://localhost:1337/' + association.image.url" alt="">
          <div class="card-body">
            <h4 class="card-title">{{ association.nom }}</h4>
            <p class="card-text"> {{ association.adressePostale }} </p>
            <p class="card-text"> 0{{ association.telephone }} </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">VOIR L'ASSOCIATION</a>
          </div>
        </div>
      </div>
  </b-row>
  <div class="body">
    <!-- Footer -->
<footer class="page-footer font-small teal pt-4">

  <!-- Footer Text -->
  <div class="container-fluid text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-4 mt-md-0 mt-3">

        <!-- Content -->
        <h5 class="text-uppercase font-weight-bold text-md-center">Nous contacter : <img src="115.png" alt="115" width="75" height="75"></h5>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none pb-3">

      <div class="col-md-4 mt-md-0 mt-3">

        <!-- Content -->
        <h5 class="text-uppercase font-weight-bold text-md-center">ARSL
11, RUE DE DION BOUTON
87280 LIMOGES
05.55.77.57.77</h5>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none pb-3">

      <!-- Grid column -->
      <div class="col-md-4 mb-md-0 mb-3">

        <!-- Content -->
        <h5 class="text-uppercase font-weight-bold text-md-center"><a href="http://www.arsl.eu/mentions-legales/">Mentions legales</a></h5>

      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">
    <a href="http://www.arsl.eu/"> Site ARSL</a>
  </div>
</footer>

  </div>
</div>
</template>

<script>

import associationsQuery from '~/apollo/queries/association/associations'

export default {

  data() {
    return {
      slide: 0,
      sliding: null,
      associations: [],
      query: ''
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  apollo: {
    associations: {
      prefetch: true,
      query: associationsQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.associations.filter(association => {
        return association.nom.toLowerCase().includes(this.query.toLowerCase())
      })
    },
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
  color: #f26340 ;
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
