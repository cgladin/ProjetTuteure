
<template>
  <client-only>
               <nav id="navigation" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                 <div class="container">
                   <a href="/"><b-img src="logo.png" height="60" width="60" fluid alt="Responsive logo"></b-img></a>

                   <!-- burger sur telephone -->
                   <div class="row tel">
                       <b-button v-b-toggle.collapse-1 variant="primary" class="tel bg-dark">
                         <span class="navbar-toggler-icon "></span>
                       </b-button>

                       <b-collapse id="collapse-1" class="mt-2">
                         <b-card class="bg-dark">
                           <router-link tag="a" class="nav-link text-white" to="/associations" exact>Associations</router-link>
                           <a class="nav-link text-white" href="http://localhost:1337/admin/auth/login">Se connecter</a>
                         </b-card>
                       </b-collapse>
                 </div>

                  <!-- bouton sur pc -->
                     <ul class="navbar-nav ml-auto ordi">
                       <li class="nav-item">
                         <div class="translate" id="google_translate_element"></div>
                       </li>
                       <li class="nav-item align-middle">
                         <router-link tag="a" class="nav-link text-white" to="/associations" exact>Associations</router-link>
                       </li>
                       <li class="nav-item align-middle">
                         <a class="nav-link text-white" href="http://localhost:1337/admin/auth/login">Se connecter</a>
                       </li>
                     </ul>
                 </div>

                 <!-- javascript du translate -->
                 <script type="text/javascript">// <![CDATA[
                 function googleTranslateElementInit() {
                 new google.translate.TranslateElement({pageLanguage: 'fr', includedLanguages:'en,ar,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
                 }
                 // ]]></script>
                 <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" type="text/javascript"></script>
               </nav>

  </client-only>
</template>
