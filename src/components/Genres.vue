<template>
  <div class="genres">
    <router-link v-for="genre in genres" :key="genre.id" :to="'/genre/' + genre.name">{{genre.name}}</router-link>
  </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('fetchGenres');
    },
    computed: {
        genres() {
            return this.$store.getters.getGenres;
        }
    }
}
</script>

<style scoped>
    .genres {
        width: 100%;
        padding: 5rem 4rem;
    }
</style>