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
                                   <h4 class="page-title pull-left">Créer une maraude</h4>
                                   <ul class="breadcrumbs pull-left">
                                       <li><a href="application">Accueil</a></li>
                                       <li><span>Créer une maraude</span></li>
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
                                        <h1 class="text-align-center mt-3 text-center"> Nouvelle maraude </h1>
                                        <b-form id="creerMaraude" @submit="onSubmit" @reset="onReset" v-if="show">
                                           <b-tabs card fill>
                                              <b-tab title="Formulaire" active>
                                                 <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                                                    <b-form-group id="input-group-1" label="Nom de maraude :" label-for="input-1">
                                                       <b-form-input
                                                          id="input-1"
                                                          v-model="form.nom"
                                                          type="text"
                                                          required
                                                          placeholder="Nom de maraude..."
                                                          ></b-form-input>
                                                    </b-form-group>

                                                    <b-form-group id="input-group-2" label="Heure de départ :" label-for="input-2">
                                                       <b-form-input
                                                          id="input-2"
                                                          type="date"
                                                          v-model="form.dateDepart"
                                                          required
                                                          placeholder="Heure de départ..."
                                                          ></b-form-input>
                                                    </b-form-group>

                                                    <b-form-group id="input-group-1" label="Lieu de départ :" label-for="input-1">
                                                       <b-form-input
                                                          id="input-1"
                                                          v-model="form.lieu"
                                                          type="text"
                                                          required
                                                          placeholder="Lieu de départ..."
                                                          ></b-form-input>
                                                    </b-form-group>

                                                    <b-form-group id="input-group-3" label="Heure d'arrivée :" label-for="input-3">
                                                       <b-form-input
                                                          id="input-2"
                                                          type="date"
                                                          v-model="form.dateArrivee"
                                                          required
                                                          placeholder="Heure d'arrivée'..."
                                                          ></b-form-input>
                                                    </b-form-group>

                                                    <b-form-group id="input-group-1" label="Lieu d'arrivée' :" label-for="input-1">
                                                       <b-form-input
                                                          id="input-1"
                                                          v-model="form.lieu"
                                                          type="text"
                                                          required
                                                          placeholder="Lieu d'arrivée'..."
                                                          ></b-form-input>
                                                    </b-form-group>

                                                    <b-form-group id="input-group-3" label="Personnes présentes :" label-for="input-3">
                                                       <b-form-select
                                                          id="input-3"
                                                          v-model="form.personnes"
                                                          :options="personnes"
                                                          required
                                                          placeholder="Choisir une personne..."
                                                          ></b-form-select>
                                                    </b-form-group>

                                                 </b-form>
                                                 </b-form-group>
                                              </b-tab>
                                           </b-tabs>
                                           <div id="valider" class="d-flex justify-content-center ">
                                              <b-button type="submit" variant="primary">Créer la nouvelle maraude</b-button>
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
           email: '',
           name: '',
           personnes: null,
           checked: []
         },
         personnes: [{ text: 'Choisir une personne...', value: 'null' }, 'Patricia', 'Stéphane', 'Michel', 'Thomas', 'Frédéric'],
         show: true,
       }
     },
     methods: {
       onSubmit(evt) {
         evt.preventDefault()
         alert(JSON.stringify(this.form))
       },
       onReset(evt) {
         evt.preventDefault()
         // Reset our form values
         this.form.email = ''
         this.form.name = ''
         this.form.food = null
         this.form.checked = []
         // Trick to reset/clear native browser form validation state
         this.show = false
         this.$nextTick(() => {
           this.show = true
         })
       }
     },
   }
</script>
