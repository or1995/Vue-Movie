import { createRouter , createWebHistory} from "vue-router";
import { routeGuard } from "../auth/index";

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Logout from '../components/Logout.vue';
import AuthBack from '../components/AuthBack.vue';
import Movie from '../components/Movie.vue'; 
import Genres from '../components/Genres.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', props: true, component: Home, beforeEnter: routeGuard},
        {path: '/login', props: true, component: Login},
        {path: '/logout', props: true, component: Logout},
        {path: '/auth', props: true, component: AuthBack},
        {path: '/movie/:movieId', props: true, component: Movie},
        {path: '/genres', props: true, component: Genres}
    ]
})

