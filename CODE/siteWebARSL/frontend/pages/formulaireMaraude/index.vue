<template>
   <div>
       <html class="no-js" lang="en">

       <head>
           <meta charset="utf-8">
           <meta http-equiv="x-ua-compatible" content="ie=edge">
           <title>ARSL - Application</title>
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <link rel="shortcut icon" type="image/png" href="assets/images/icon/favicon.ico">
           <link rel="stylesheet" href="assets/css/bootstrap.min.css">
           <link rel="stylesheet" href="assets/css/font-awesome.min.css">
           <link rel="stylesheet" href="assets/css/themify-icons.css">
           <link rel="stylesheet" href="assets/css/metisMenu.css">
           <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
           <link rel="stylesheet" href="assets/css/slicknav.min.css">
           <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
           <link rel="stylesheet" href="assets/css/typography.css">
           <link rel="stylesheet" href="assets/css/default-css.css">
           <link rel="stylesheet" href="assets/css/styles.css">
           <link rel="stylesheet" href="assets/css/responsive.css">
           <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
       </head>

       <body>
           <div id="preloader">
               <div class="loader"></div>
           </div>
           <div class="page-container">
               <div class="sidebar-menu">
                   <div class="sidebar-header">
                       <div class="logo">
                           <a href="application"><img src="logo.png" alt="logo"></a>
                       </div>
                   </div>
                   <div class="main-menu">
                       <div class="menu-inner">
                           <nav>
                               <ul class="metismenu" id="menu">
                                   <li class="active"><a href="application">Tableau de bord</a></li>
                                   <li class="active"><a href="creerMaraude">Créer une maraude</a></li>
                                   <li class="active"><a href="formulaireMaraude">Formulaire de maraude</a></li>
                                   <li class="active"><a href="rapportMaraude">Rapport de maraude</a></li>
                                   <li class="active"><a href="creerAlerte">Créer une alerte</a></li>
                               </ul>
                           </nav>
                       </div>
                   </div>
               </div>
               <div class="main-content">
                   <div class="page-title-area">
                       <div class="row align-items-center">
                           <div class="col-sm-6">
                             <div class="nav-btn pull-left">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                             </div>
                               <div class="breadcrumbs-area clearfix">
                                   <h4 class="page-title pull-left">Formulaire de maraude</h4>
                                   <ul class="breadcrumbs pull-left">
                                       <li><a href="application">Accueil</a></li>
                                       <li><span>Formulaire de maraude</span></li>
                                   </ul>
                               </div>
                           </div>
                           <div class="col-sm-6 clearfix">
                               <div class="user-profile pull-right">
                                   <img class="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar">
                                   <h4 class="user-name dropdown-toggle" data-toggle="dropdown">Stéphane RAZGALLAH <i class="fa fa-angle-down"></i></h4>
                                   <div class="dropdown-menu">
                                       <a class="dropdown-item" href="#">Se déconnecter</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                       <div class="row mt-5">
                           <div class="col-xl-6">
                               <div class="card">
                                   <div class="card-body">
                                     <b-card>
                                        <h1 class="text-align-center mt-3 text-center"> Formulaire de maraude pour personne rencontrée </h1>
                                        <b-form id="formulaireMaraude" @submit="onSubmit" @reset="onReset" v-if="show">
                                              <b-tab active>

                                                <b-form-group id="input-group-1" name="civilite" label="Civilité :" label-for="civilite">
                                                      <b-form-radio name="civilite" value="A">
                                                        <p class="ml-4">Monsieur</p>
                                                      </b-form-radio>
                                                      <b-form-radio name="civilite" value="B">
                                                        <p class="ml-4">Madame</p>
                                                      </b-form-radio>
                                                      <b-form-radio name="civilite" value="C">
                                                        <p class="ml-4">Autre</p>
                                                      </b-form-radio>
                                                </b-form-group>

                                                <b-form-group id="input-group-2" name="langueParlee" label="Langue(s) parlée(s) :" label-for="langueParlee">
                                                    <b-form-checkbox-group id="input-group-2" name="langueParlee">
                                                        <b-form-checkbox value="français">
                                                          <p class="ml-4">Français</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="allemand">
                                                          <p class="ml-4">Allemand</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="anglais">
                                                          <p class="ml-4">Anglais</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="arabe">
                                                          <p class="ml-4">Arabe</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="chinois">
                                                          <p class="ml-4">Chinois</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="espagnol">
                                                          <p class="ml-4">Espagnol</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="italien">
                                                          <p class="ml-4">Italien</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="japonais">
                                                          <p class="ml-4">Japonais</p>
                                                        </b-form-checkbox>
                                                        <b-form-checkbox value="russe">
                                                          <p class="ml-4">Russe</p>
                                                        </b-form-checkbox>
                                                    </b-form-checkbox-group>
                                                </b-form-group>

                                                 <b-form-group id="input-group-3" label="Lieu de rencontre :" label-for="input-3">
                                                    <b-form-input
                                                       id="input-3"
                                                       v-model="form.lieu"
                                                       placeholder="Lieu de rencontre..."
                                                       ></b-form-input>
                                                 </b-form-group>

                                                 <b-form-group id="input-group-4" label="Information Famille :" label-for="input-4">
                                                    <b-form-textarea
                                                       id="input-4"
                                                       v-model="form.infoFamille"
                                                       placeholder="Information famille..."
                                                       rows="4"
                                                       max-rows="8"
                                                       ></b-form-textarea>
                                                 </b-form-group>

                                                 <b-form-group id="input-group-5" name="problemeDeSante" label="Problèmes de santé :" label-for="input-5">
                                                   <b-form-radio name="problemeDeSante" value="oui">
                                                     <p class="ml-4">Oui</p>
                                                   </b-form-radio>
                                                   <b-form-radio name="problemeDeSante" value="non">
                                                     <p class="ml-4">Non</p>
                                                   </b-form-radio>
                                                 </b-form-group>

                                                 <b-form-group id="input-group-6" name="situationHebergement" label="Situation d'hébergement :" label-for="situationHebergement">
                                                       <b-form-radio name="situationHebergement" value="A">
                                                         <p class="ml-4">Dans la rue</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="situationHebergement" value="B">
                                                         <p class="ml-4">Chez un ami</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="situationHebergement" value="C">
                                                         <p class="ml-4">Dans un centre d'hébergement</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="situationHebergement" value="D">
                                                         <p class="ml-4">Chez sa famille</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="situationHebergement" value="E">
                                                         <p class="ml-4">Dans un établissement publique</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="situationHebergement" value="E">
                                                         <p class="ml-4">Possède un logement</p>
                                                       </b-form-radio>
                                                 </b-form-group>

                                                 <b-form-group id="input-group-7" name="age" label="Age :" label-for="age">
                                                       <b-form-radio class="mr-5" name="age" value="A">
                                                         <p class="ml-4">Moins de 18 ans</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="age" value="B">
                                                         <p class="ml-4">18 à 30 ans</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="age" value="C">
                                                         <p class="ml-4">30 à 50 ans</p>
                                                       </b-form-radio>
                                                       <b-form-radio name="age" value="D">
                                                         <p class="ml-4">Plus de 50 ans</p>
                                                       </b-form-radio>
                                                 </b-form-group>
                                              </b-tab>
                                           <div id="valider" class="d-flex justify-content-center ">
                                              <b-button type="submit" variant="primary">Valider le formulaire</b-button>
                                           </div>
                                        </b-form>
                                     </b-card>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
           <script src="assets/js/popper.min.js"></script>
           <script src="assets/js/bootstrap.min.js"></script>
           <script src="assets/js/owl.carousel.min.js"></script>
           <script src="assets/js/metisMenu.min.js"></script>
           <script src="assets/js/jquery.slimscroll.min.js"></script>
           <script src="assets/js/jquery.slicknav.min.js"></script>

           <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
           <script src="https://code.highcharts.com/highcharts.js"></script>
           <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
           <script>
           zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
           ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "ee6b7db5b51705a13dc2339db3edaf6d"];
           </script>
           <script src="assets/js/line-chart.js"></script>
           <script src="assets/js/pie-chart.js"></script>
           <script src="assets/js/plugins.js"></script>
           <script src="assets/js/scripts.js"></script>
       </body>

       </html>

   </div>
</template>
<script>
   export default {
     data() {
       return {
         form: {
           nom: '',
           prenom: '',
           pseudo: '',
           nationalite: '',
           checked: []
         },
         show: true
       }
     },
     methods: {
       onSubmit(evt) {
         evt.preventDefault()
         alert(JSON.stringify(this.form))
       },
     }
   }
</script>
