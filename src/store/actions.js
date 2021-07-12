import axios from 'axios';

export default {
    fetchPopularMovies(context) {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=235a4bcbe153b255ef99c278bddd6dd5')
        .then(res => {
            context.commit('popularMovies', {movies: res.data});
        })
    },
    fetchMovie(context, payload) {
        axios.get(`https://api.themoviedb.org/3/movie/${payload}?api_key=235a4bcbe153b255ef99c278bddd6dd5`)
        .then(res => {
            context.commit('currentMovie', {movie: res.data});
        })
    }
}