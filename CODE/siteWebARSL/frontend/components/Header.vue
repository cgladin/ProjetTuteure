
<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>



        <div class="uk-navbar-left">

            </ul>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div class="container">
                <li class="uk-active"><router-link tag="a" class="navbar-brand" to="/" exact>ARSL</router-link></li>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">

                      <div id="google_translate_element"></div>
                      <script type="text/javascript">// <![CDATA[
                      function googleTranslateElementInit() {
                      new google.translate.TranslateElement({pageLanguage: 'fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
                      }
                      // ]]></script>
                      <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" type="text/javascript"></script>

                    <li class="nav-item">
                      <li><router-link tag="a" class="nav-link" to="/associations" exact>Associations</router-link></li>
                    </li>
                    <li class="nav-item">
                      <li><router-link tag="a" class="nav-link" to="/associations" exact>Se connecter</router-link></li>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>

    </nav>
  </client-only>
</template>
