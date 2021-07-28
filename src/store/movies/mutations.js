export default {
    popularMovies(state, payload) {
        state.popularMovies = payload.movies.results;
    },
    topRatedMovies(state, payload) {
        state.topRatedMovies = payload.movies.results;
    },
    currentMovie(state, payload) {
        state.currentMovie = payload.movie;
    },
    genres(state, payload) {
        state.genres = payload.genres;
    }
}