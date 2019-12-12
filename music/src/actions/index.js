import axios from 'axios'

export const GET_PLAYLIST_START = 'GET_PLAYLIST_START';
export const GET_PLAYLIST_SUCCESS = 'GET_PLAYLIST_SUCCESS';
export const FETCH_PLAYLIST_FAILURE = 'FETCH_PLAYLIST_FAILURE';

export const getPlaylist = (genre) => dispatch => {
    dispatch({ type: GET_PLAYLIST_START });
    axios
        .get(`https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/${genre}?format=json`)
        .then(r => {
            console.log(r.data.tracks)
            dispatch({ type: GET_PLAYLIST_SUCCESS, payload: r.data.tracks });
        })
        .catch(err => {
            dispatch({ type: FETCH_PLAYLIST_FAILURE, payload: err })
        })
};