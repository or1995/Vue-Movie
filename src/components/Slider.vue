<template>
  <div class="slider">
      <div class="slidecontainer" :style="{transform: `translateX(${move}rem)`}">
        <movie-link v-for="movie in movies" :key="movie.id" :movie="movie"/>
      </div>
        <button class="back" @click="back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        </button>
        <button class="next" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
        </button>
  </div>
</template>

<script>
import MovieLink from './MovieLink.vue';
export default {
    components: {
        MovieLink
    },
    props: ['movies'],
    data() {
        return {
            current: 0,
            move: 0
        }
    },
    methods: {
        next() {
            if(this.current < this.movies.length - 4) {
                this.current = this.current + 1;
                this.move = this.move - 25;
            }
        },
        back() {
            if(this.current > 0) {
                this.current = this.current - 1;
                this.move = this.move + 25;
            }
        }
    }
}
</script>

<style scoped>
    .slider {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 38rem;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .slidecontainer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
        transition: all .3s;
    }

    .back {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 4rem;
        z-index: 10000;
        width: 5rem;
        height: 100%;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    .back svg {
        height: 2rem;
        width: 2rem;
        fill: #fff;
    }

    .next {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 4rem;
        z-index: 10000;
        width: 5rem;
        height: 100%;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    .next svg {
        height: 2rem;
        width: 2rem;
        fill: #fff;
    }
</style>