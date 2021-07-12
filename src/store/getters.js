const getters =  {
    getPopularMovies(state) {
        return state.popularMovies;
    },
    getCurrentMovie(state) {
        return state.currentMovie
    }
}

export default getters;