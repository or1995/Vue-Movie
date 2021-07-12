import { createRouter , createWebHistory} from "vue-router";

import Home from '../components/Home.vue';
import Movie from '../components/Movie.vue'; 

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', props: true, component: Home},
        {path: '/movie/:movieId', props: true, component: Movie}
    ]
})

