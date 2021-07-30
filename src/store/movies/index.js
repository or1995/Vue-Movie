import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    state() {
        return {
            popularMovies: [],
            topRatedMovies: [],
            upcomingMovies: [],
            currentMovie: [],
            genres: []
        }
    },
    mutations,
    getters,
    actions
}