<template>
  <div class="carousel">
      <div v-for="(movie,index) in upcomingMovies" :key="movie.id" class="element" :class="index === currentItem ? 'active' : null">
          <img class="backdrop" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"/>
          <div class="text">
            <h2>{{movie.original_title}}</h2>
            <span>{{movie.release_date}}</span>
            <p>{{movie.overview}}</p>
            <button>More Info</button>
          </div>
          <div class="right">
            <div class="posterdiv">
                <div class="posterback"></div>
                <img class="poster" :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"/>
                <div class="prism"></div>
            </div>
          </div>
          <div class="controls">
              <button @click="() => {changePage(0)}" :class="currentItem === 0 ? 'buttonactive' : null"></button>
              <button @click="() => {changePage(1)}" :class="currentItem === 1 ? 'buttonactive' : null"></button>
              <button @click="() => {changePage(2)}" :class="currentItem === 2 ? 'buttonactive' : null"></button>
              <button @click="() => {changePage(3)}" :class="currentItem === 3 ? 'buttonactive' : null"></button>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentItem: 0,
            currentInterval: null
        }
    },
    created() {
        this.$store.dispatch('fetchUpcomingMovies');
        this.currentInterval = setInterval(() => {
            if(this.currentItem < 3) {
                this.currentItem = this.currentItem + 1
            } else {
                this.currentItem = 0;
            }
        }, 5000);

    },
    computed: {
        upcomingMovies() {
            const arr = []
            console.log(this.$store.getters.getUpcomingMovies)
            for(let key in Object.entries(this.$store.getters.getUpcomingMovies)) {
                arr.push(this.$store.getters.getUpcomingMovies[key])
            }
            console.log(arr);
            return arr.slice(0,4);
        },
    },
    methods: {
        changePage(page) {
            clearInterval(this.currentInterval);
            this.currentItem = page;
                    this.currentInterval = setInterval(() => {
            if(this.currentItem < 3) {
                this.currentItem = this.currentItem + 1
            } else {
                this.currentItem = 0;
            }
        }, 5000);
        }
    }
}
</script>

<style scoped>
    .carousel {
        position: absolute;
        top: 4rem;
        left: 0;
        width: 100%;
        height: 50rem;
        overflow: hidden !important;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid var(--back-darker-color);
        background-color: var(--brand-back-color);
    }

    .element {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        border-radius: 7px;
        background-color: var(--brand-back-color);
    }

    .active {
        z-index: 1000;
    }

    .active .right .posterdiv .poster {
        animation: in 1.5s forwards;
    }

    .active .right .posterdiv .prism {
        animation: in 1.5s forwards;
    }

    .active .right .posterdiv .posterback {
        animation: in 1.5s .5s forwards;
    }

    .right {
        width: 30rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .posterdiv {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .poster {
        position: relative;
        width: 25rem;
        height: auto;
        border-radius: 4px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transform: rotate(5deg);
        transition: all .3s;
        opacity: 0;
    }

    .prism {
        position: absolute;
        top: 0;
        left: 0;
        width: 25rem;
        height: 37.5rem;
        transform: rotate(5deg);
        background: linear-gradient(270deg, rgba(52,143,80,0) 0%, rgba(0,0,0,0.2) 100%);
        z-index: 10000;
        transition: all .3s;
    }

    .posterdiv:hover .poster {
        margin-top: -.5rem;
        margin-left: -.5rem;
        transition: all .3s;
    }

    .posterdiv:hover .prism {
        margin-top: -.5rem;
        margin-left: -.5rem;
        transition: all .3s;
    }

    .posterback {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 25rem;
        height: 37.5rem;
        border-radius: 4px;
        background-color: var(--brand-color);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transform: rotate(5deg);
        transition: all .3s;
        opacity: 0;
    }

    .posterdiv:hover .posterback {
        margin-bottom: -.5rem;
        margin-right: -.5rem;
        transition: all .3s;
    }

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        opacity: 0.03;
        z-index: 1;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 40rem;
        margin-right: 4rem;
        z-index: 1000;
    }

    .text h2 {
        color: var(--brand-color);
        font-size: 4rem;
    }

    .text span {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        font-weight: 300;
    }

    .text p {
        font-size: 1.5rem;
    }

    .text button {
        border: none;
        font-size: 1.5rem;
        padding: .5rem 1.5rem;
        background-color: var(--brand-color);
        margin-top: 2rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        color: var(--font-light-color);
        cursor: pointer;
    }

    .controls {
        position: absolute;
        bottom: 3rem;
        left: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        z-index: 1000;
    }

    .controls button {
        border-radius: 50%;
        height: 1rem;
        width: 1rem;
        border: 2px solid var(--brand-color);
        outline: none;
        background-color: #fff;
        cursor: pointer;
        transition: all .3s;
    }

    .buttonactive {
        background-color: var(--brand-color) !important;
        transition: all .3s;
    }


</style>

<style>
    @keyframes in {
        0% {
            opacity: 0;
            transform: translateY(3rem) rotate(5deg);
        }
        100% {
            opacity: 1;
            transform: translateY(0) rotate(5deg);
        }
    }
</style>