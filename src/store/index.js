import {createStore} from 'vuex';

import movies from './movies/index';
import auth from './auth/index';

export default createStore({
    modules: {
        movies,
        auth
    }
})