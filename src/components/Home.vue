<template>
    <div class="home">
        <carousel/>
        <h2>Top Rated Movies</h2>
        <slider v-if="topRatedMovies" :movies="topRatedMovies" />
        <h2>Popular Movies</h2>
        <slider v-if="popularMovies" :movies="popularMovies" />
    </div>
</template>

<script>
import Carousel from './Carousel.vue'; 
import Slider from './Slider.vue';

export default {
    components: {
        Carousel,
        Slider,
    },
    data() {
        return {

        }
    },
    computed: {
        popularMovies() {
            const arr = []
            for(let key in Object.entries(this.$store.getters.getPopularMovies)) {
                arr.push(this.$store.getters.getPopularMovies[key])
            }
            console.log(arr);
            return arr;
        },
        topRatedMovies() {
            const arr = []
            for(let key in Object.entries(this.$store.getters.getTopRatedMovies)) {
                arr.push(this.$store.getters.getTopRatedMovies[key])
            }
            console.log(arr);
            return arr;
        },
    },
    created() {
        this.$store.dispatch('fetchPopularMovies');
        this.$store.dispatch('fetchTopRatedMovies');
    }
}
</script>

<style scoped>
    .home {
        margin-top: 51rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .home h2 {
        align-self: flex-start;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        font-weight: 300;
    }
    .allmovies {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        color: #fff;
        gap: 1.5rem;
    }
</style>