const getters =  {
    getPopularMovies(state) {
        return state.popularMovies
    },
    getTopRatedMovies(state) {
        return state.topRatedMovies
    },
    getCurrentMovie(state) {
        return state.currentMovie
    },
    getGenres(state) {
        return state.genres
    }
}

export default getters;