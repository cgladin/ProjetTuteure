<template>
  <div>

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

        <div class="page-container">
            <div class="sidebar-menu">
                <div class="sidebar-header">
                    <div class="logo">
                        <a href="index.html"><img src="logo.png" alt="logo"></a>
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
                                <h4 class="page-title pull-left">Tableau de bord</h4>
                                <ul class="breadcrumbs pull-left">
                                    <li><a href="index.html">Accueil</a></li>
                                    <li><span>Tableau de bord</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 clearfix">
                            <div class="user-profile pull-right">
                                <img class="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar">
                                <h4 class="user-name dropdown-toggle" data-toggle="dropdown">Stéphane RAZGALLAH <i class="fa fa-angle-down"></i></h4>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/">Se déconnecter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="row mt-5">
                        <div class="col-xl-6">
                            <div class="card">
                                    <h4 class="header-title">Dernières news</h4>
                                    <div class="letest-news mt-5">
                                        <div class="single-post mb-xs-40 mb-sm-40">
                                            <div class="lts-thumb">
                                                <img src="assets/images/blog/post-thumb1.jpg" alt="post thumb">
                                            </div>
                                            <div class="lts-content">
                                                <span>S. RAZGALLAH</span>
                                                <h2><a href="blog.html">Épidémie de Coronavirus</a></h2>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some...</p>
                                            </div>
                                        </div>
                                        <div class="single-post">
                                            <div class="lts-thumb">
                                                <img src="assets/images/blog/post-thumb2.jpg" alt="post thumb">
                                            </div>
                                            <div class="lts-content">
                                                <span>S. RAZGALLAH</span>
                                                <h2><a href="blog.html">Suractivité sanitaire à la gare Bénédictins</a></h2>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some...</p>
                                            </div>
                                        </div>
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

  </div>
</template>


<script>
  export default {
    methods: {
      showModal1() {
        this.$refs['modal-1'].show()
      },
      showModal2() {
        this.$refs['modal-2'].show()
      },
      hideModal1() {
        this.$refs['modal-1'].hide()
      },
      hideModal2() {
        this.$refs['modal-2'].hide()
      }
    }
  }
</script>


<style>
  h1{
    font-family: OfficinaSansStd-Book, sans-serif;
    color: #f26340 ;
  }
</style>
