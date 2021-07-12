export default {
    popularMovies(state, payload) {
        state.popularMovies = payload.movies.results;
    },
    currentMovie(state, payload) {
        state.currentMovie = payload.movie;
    }
}