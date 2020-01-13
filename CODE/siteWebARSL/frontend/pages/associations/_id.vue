<template>
  <div>

      <form class="uk-search uk-search-large uk-align-center uk-margin">
          <span uk-search-icon></span>
          <input class="uk-search-input" v-model="query" type="search" placeholder="Search...">
      </form>

      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" v-for="association in filteredList" v-bind:key="association" uk-grid>
          <div class="uk-card-media-left uk-cover-container">
              <img :src="'http://localhost:1337/' + association.image.url" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
          </div>
          <div>
              <div class="uk-card-body">
                  <h3 class="uk-card-title">{{ association.nom }}</h3>
                  <p>{{ association.description }}</p>
                  <router-link :to="{ name: 'associations-id', params: { id: association.id }}" tag="a" class="uk-button uk-button-primary">Voir l'association
                  </router-link>
              </div>
          </div>
      </div>

  </div>

</template>

<script>
// Import the associations query
import associationsQuery from '~/apollo/queries/association/associations'

export default {
  data() {
    return {
      // Initialize an empty restaurants variabkle
      associations: [],
      query: ''
    }
  },
  apollo: {
    association: {
      prefetch: true,
      query: associationsQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.associations.filter(restaurant => {
        return association.nom.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>
  </client-only>
</div>
</template>

<script>
import associationQuery from '~/apollo/queries/association/associations'

export default {
  data() {
    return {
      association: Object
    }
  },
  apollo: {
    association: {
      prefetch: true,
      query: associationQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
