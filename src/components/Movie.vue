<template>
    <div class="movie">
        <div v-if="movie" class="backdropdiv" :style="{background: `linear-gradient(180deg, rgba(27,28,29,0) 0%, rgba(27,28,29,1) 100%), url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`}">
            <div>{{$auth.isAuthenticated.value}}</div>
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
        top: 5rem;
        left: 0;
        width: 100vw;
        height: 50rem;
        background-size: cover !important;
    }

</style>