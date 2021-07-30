<template>
    <div class="home">
        <carousel/>
        <h2>Top Rated Movies</h2>
        <div class="allmovies" v-if="topRatedMovies">
            <router-link v-for="movie in topRatedMovies" :to="'/movie/' + movie.id" :key="movie.id" class="movie">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"/>
                <h2>{{movie.original_title}}</h2>
            </router-link>
        </div>
        <h2>Popular Movies</h2>
        <div class="allmovies" v-if="popularMovies">
            <router-link v-for="movie in popularMovies" :to="'/movie/' + movie.id" :key="movie.id" class="movie">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"/>
                <h2>{{movie.original_title}}</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
import Carousel from './Carousel.vue'; 
export default {
    components: {
        Carousel
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

    .movie {
        position: relative;
    }

    .movie h2 {
        position: absolute;
        bottom: 0;
        left: 1rem;
        opacity: 0;
        transition: all .5s;
        color: #fff;
        z-index: 100000;
    }

    .movie:hover h2 {

        opacity: 1;
        transition: all .5s;
    }

    .movie::after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%);
        z-index: 10000;
        transition: all .3s;
        opacity: 0;
        cursor: pointer;
    }

    .movie:hover::after {
        opacity: 1;
        background: linear-gradient(180deg, rgba(0,0,0,0.17130602240896353) 0%, rgba(0,0,0,1) 100%);
        transition: all .3s;
    }

    .movie img {
        width: 100%;
    }
</style>