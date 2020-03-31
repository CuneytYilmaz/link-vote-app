import { combineReducers } from 'redux';
import links from './links';

// Tüm reducer'lar reducers/index.js'in içerisinde toplanıyor. Apples dışında reducer olsaydı buraya eklenecekti.
export default combineReducers({
	links,
});