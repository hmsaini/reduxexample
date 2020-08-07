import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initalState = {
    items: [],
    item: {}
}

export default function(state = initalState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            // console.log('reducers')
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }

        default: 
            return state; // current state
    }
}