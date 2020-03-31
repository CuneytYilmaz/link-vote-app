import { ADD_LINK } from '../actions/types'

export default function addLink (state={}, action) {
	switch (action.type) {
        case ADD_LINK:
            return {
                ...state,
                [action.link.id]: action.link,
            }
        default :
       	    return state
    }
}