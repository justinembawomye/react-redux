import {GET_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            console.log('Its in reducers now..')
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST:
            return {
                ...state,
                item:action.payload
            }    
        default:
            return state;
    }

}