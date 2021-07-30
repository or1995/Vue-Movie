const getters =  {
    getPopularMovies(state) {
        return state.popularMovies
    },
    getTopRatedMovies(state) {
        return state.topRatedMovies
    },
    getUpcomingMovies(state) {
        return state.upcomingMovies
    },
    getCurrentMovie(state) {
        return state.currentMovie
    },
    getGenres(state) {
        return state.genres
    }
}

export default getters;