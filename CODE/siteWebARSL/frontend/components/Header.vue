<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><router-link tag="a" class="navbar-brand" to="/" exact>ARSL</router-link></li>
                <li><router-link tag="a" class="navbar-brand" to="/associations" exact>Associations</router-link></li>
                <li><router-link tag="a" class="navbar-brand" to="/associations" exact>se connecter</router-link></li>
            </ul>

        </div>

    </nav>
  </client-only>
</template>
