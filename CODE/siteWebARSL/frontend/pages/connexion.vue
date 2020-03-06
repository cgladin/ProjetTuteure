<template>
<div>

  <div class="uk-child-width-1-2@m uk-grid">
      <div>
          <div class="uk-card uk-card-default uk-card-large uk-card-body">
              <h1> Connexion à l'application </h1>
              <form @submit.stop.prevent="handleSubmit">
                  <fieldset class="uk-fieldset">

                      <div class="uk-margin">
                        <label class="uk-form-label">Nom</label>
                       <input class="uk-input" v-model="username" type="text" placeholder="Nom...">
                      </div>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Mot de passe</label>
                        <input class="uk-input" v-model="password" type="password" placeholder="Mot de passe...">
                      </div>

                      <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-width-1-1" :disabled="loading" type="submit">Se connecter</button>
                      </div>

                  </fieldset>
              </form>
          </div>
      </div>
  </div>

</div>
</template>

<script>
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'
export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(
          this.username,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.push('/application')
      } catch (err) {
        this.loading = false
        alert('Nom ou mot de passe incorrect !')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>
