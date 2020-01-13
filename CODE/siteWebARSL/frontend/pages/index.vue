<template>

<div>
  <header class="bg-danger py-5 mb-5">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-12 m-0">
          <h1 class="display-5 text-white text-center mt-2 mb-2">Vous rencontrez des difficultés sociales ? (absence ou perte de logement, violences conjugales, expulsions...)</h1>
          <p class="display-3 lead h3 mb-3 text-center text-white">Appelez le </p>
          <div class="text-center">
            <img src="115.png" alt="115">
          </div>
        </div>
      </div>
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
