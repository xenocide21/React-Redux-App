import { GET_PLAYLIST_START, GET_PLAYLIST_SUCCESS, FETCH_PLAYLIST_FAILURE } from '../actions'

const initialState = {
    playlist: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type){
        case GET_PLAYLIST_START:
            console.log(state)
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case GET_PLAYLIST_SUCCESS:
            console.log(state)
            console.log(action.payload)
            return{
                ...state,
                playlist: action.payload,
                isFetching: false,
            };
        case FETCH_PLAYLIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    };
};