<template>
    <router-link :to="'/movie/' + movie.id" class="movie">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"/>
        <h2>{{movie.original_title}}</h2>
    </router-link>
</template>

<script>
export default {
    props: ['movie']
}
</script>

<style scoped>
    .movie {
        position: relative;
        flex-shrink: 0;
        border-radius: 5px;
        overflow: hidden;
        width: 23.5rem !important;
        height: 37.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
    }

    .movie h2 {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        opacity: 0;
        transition: all .5s;
        color: #fff;
        z-index: 100000;
        font-weight: 400;
    }

    .movie:hover h2 {
        opacity: 1;
        transition: all .5s;
    }

    .movie::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 37.5rem;
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
        height: 100%;
    }
</style>