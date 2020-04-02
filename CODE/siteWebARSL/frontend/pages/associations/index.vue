<template>
   <div>
     <Header />
      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" v-for="association in filteredList" v-bind:key="association" uk-grid>
         <div class="uk-card-media-left uk-cover-container">
            <img :src="'http://localhost:1337/' + association.image.url" class="w-50 h-75" alt="" uk-cover>

         </div>
         <div>
            <div class="uk-card-body">
               <h3 class="uk-card-title">{{ association.nom }}</h3>
               <p>{{ association.description }}</p>
               <router-link :to="{ name: 'association.siteWeb', params: { id: association.id }}" tag="a" class="uk-button uk-button-primary">Voir l'association
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import Header from '~/components/Header.vue'
   import associationsQuery from '~/apollo/queries/association/associations'

   export default {
     data() {
       return {
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
       filteredList() {
         return this.associations.filter(association => {
           return association.nom.toLowerCase().includes(this.query.toLowerCase())
         })
       },
     },
     components: {
       Header
     }
   }
</script>
