<template>

<div>

  <header>
    <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#000000"
      
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Appelez le 115"
        img-src="1.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
  </header>

  <div class="row d-flex justify-content-center mb-3" id="carte">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68101.40696834163!2d1.2760437400135942!3d45.833428906473266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1575379528277!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
  <!-- /.row -->

  <div class="row">
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/300x200" alt="">
        <div class="card-body">
          <h4 class="card-title">Restos du Coeur</h4>
          <p class="card-text"> 23, Rue Charpentier 87 000 LIMOGES </p>
          <p class="card-text"> 9H-12H  14H-17H </p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/300x200" alt="">
        <div class="card-body">
          <h4 class="card-title">Secours Populaire</h4>
          <p class="card-text"> 6, Rue Fulton 87 280 LIMOGES </p>
          <p class="card-text"> 14H-18H </p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/300x200" alt="">
        <div class="card-body">
          <h4 class="card-title">Secours Catholique</h4>
          <p class="card-text"> 23, Rue Charpentier 87 000 LIMOGES </p>
          <p class="card-text"> 9H-12H  14H-17H </p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>
  <div class="body">


  </div>
</div>
</template>

<script>
export default {

  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
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
