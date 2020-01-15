<script>
  var previousPosition = null;

  function initialize() {
    map = new google.maps.Map(document.getElementById("map_canvas"), {
          zoom: 19,
          center: new google.maps.LatLng(48.858565, 2.347198),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
  }

  if (navigator.geolocation)
    var watchId = navigator.geolocation.watchPosition(successCallback, null, {enableHighAccuracy:true});
  else
    alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");

  function successCallback(position){
    map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: map
    });
    if (previousPosition){
      var newLineCoordinates = [
          new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
          new google.maps.LatLng(position.coords.latitude, position.coords.longitude)];

      var newLine = new google.maps.Polyline({
        path: newLineCoordinates,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      newLine.setMap(map);
    }
    previousPosition = position;
  };
</script>

<template>



<div>

  <header>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
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
  <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
  </header>

    <div onload="initialize()" class="row d-flex justify-content-center mb-1" id="carte">
      <div id="map_canvas" class=".flex-fill">
        <iframe src="https://www.google.com/maps/d/embed?mid=13QJZSsCv_kAqH-8Pv9OKvU6Cn28S8FRg" width="800" height="480"></iframe>
      </div>
    </div>

    <div>
      <b-button class="btn-lg" variant="primary" href="/lieux">Voir les horaires des lieux</b-button>
    </div>

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
  <div>
    <h2>Les associations</h2>
    <hr>
    <p>Afin de lutter contre les exclusions sociales, l'Association de Réinsertion Sociale du Limousin s'est associée avec les associations suivantes.
    Celles-ci effectuent des maraudes à l'aide de bénévoles permettant de rencontrer les personnes en difficultés sociales et donc
    leur proposer une aide. Ces associations et l'ARSL possèdent également des lieux d'accueil proposant de nombreuses prestations sociales.</p>
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


<footer id="foot" class="page-footer font-small blue pt-4">
  <div class="container-fluid text-center text-md-left">
    <div class="row">
      <div class="col-md-4 mt-md-0 mt-3">
        <h5 id="text1" class="text-uppercase font-weight-bold text-md-center">Nous contacter : 05.55.77.57.77</h5>
      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
      <div class="col-md-4 mt-md-0 mt-3">
        <h5 id="text2" class="text-uppercase font-weight-bold text-md-center">ARSL
11, RUE DE DION BOUTON
87280 LIMOGES
</h5>
      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
      <div class="col-md-4 mb-md-0 mb-3">
        <h5 class="text-uppercase font-weight-bold text-md-center"><a id="link2" href="http://www.arsl.eu/mentions-legales/">Mentions legales</a></h5>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">
    <a id="link1" href="http://www.arsl.eu/"> Site ARSL</a>
  </div>
</footer>

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
#link1,#link2,#text1,#text2
{
  color : #ffffff;
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

#carte{
  width:100%;
}

#map_canvas{
  width:500px;
  height:400px;
}

#foot{
  background-color: #343a40;
  margin-left: -40px;
  margin-right: -40px;
}

</style>
