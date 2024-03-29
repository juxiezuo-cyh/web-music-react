import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';

// 合并后的reducer
const cReducer = combineReducers({
  recommend: recommendReducer
});

export default cReducer;