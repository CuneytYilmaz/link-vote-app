import { ADD_LINK } from './types'

export function addLink (link) {
	return {
    	type: ADD_LINK,
        link,
    }
}