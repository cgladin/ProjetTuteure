<template>

<div>
  <head>
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
  </head>
  <header class="bg-danger py-5 mb-5">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-12 m-0">
          <h1 class="display-5 text-white text-center mt-2 mb-2">Vous rencontrez des difficultés sociales ? (absence ou perte de logement, violences conjugales, expulsions...)</h1>
          <p class="display-3 lead h3 mb-3 text-center text-white">Appelez le 115.</p>
          
        </div>
      </div>
    </div>
  </header>
  <div class="row">
    <div class="col-md-8 mb-5">
      <h2>What We Do</h2>
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
      <a class="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
    </div>
    <div class="col-md-4 mb-5">
      <h2>Contact Us</h2>
      <hr>
      <address>
        <strong>Start Bootstrap</strong>
        <br>3481 Melrose Place
        <br>Beverly Hills, CA 90210
        <br>
      </address>
      <address>
        <abbr title="Phone">P:</abbr>
        (123) 456-7890
        <br>
        <abbr title="Email">E:</abbr>
        <a href="mailto:#">name@example.com</a>
      </address>
    </div>
  </div>
  <!-- /.row -->

  <div class="row">
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/300x200" alt="">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
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
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
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
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>
  <div class="title">
      <h1>  </h1>
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
