<template>
    <div class="movie">
        <div v-if="movie" class="backdropdiv" :style="{backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`}">
        </div>
    </div>    
</template>

<script>
export default {
    props: ['movieId'],
    created() {
        this.$store.dispatch('fetchMovie', this.movieId);
    },
    computed: {
        movie() {
            console.log(this.$store.getters.getCurrentMovie);
            return this.$store.getters.getCurrentMovie;
        }
    }
}
</script>

<style scoped>
    .movie {
        width: 100%;
        padding: 5rem 4rem;
    }

    .backdropdiv {
        position: absolute;
        top: 0;
        left: 0;
    }

</style>