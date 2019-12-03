<template>
  <div>

      // Search input to filters associations
      <form class="uk-search uk-search-large uk-align-center uk-margin">
          <span uk-search-icon></span>
          <input class="uk-search-input" v-model="query" type="search" placeholder="Search...">
      </form>

      // Association cards
      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" v-for="association in filteredList" v-bind:key="association" uk-grid>
          <div class="uk-card-media-left uk-cover-container">
              <img :src="'http://localhost:1337/' + association.image.url" alt="" uk-cover>
              <canvas width="600" height="400"></canvas>
          </div>
          <div>
              <div class="uk-card-body">
                  <h3 class="uk-card-title">{{ association.nom }}</h3>
                  // Link to the association using router-link
                  <router-link :to="{ name: 'associations-id', params: { id: association.id }}" tag="a" class="uk-button uk-button-primary">Voir l'association
                  </router-link>
              </div>
          </div>
      </div>

      // If no associations have been found
      <div class="uk-container uk-container-center uk-text-center" v-if="filteredList.length == 0">
       <img src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png" height="800" width="800">
       <p>No associations found</p>
     </div>

  </div>

</template>

<script>
// Import the associations query
import associationsQuery from '~/apollo/queries/association/associations'

export default {
  data() {
    return {
      // Initialize an empty associations variabkle
      associations: [],
      query: ''
    }
  },
  apollo: {
    associations: {
      prefetch: true,
      query: associationsQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.associations.filter(association => {
        return association.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>
