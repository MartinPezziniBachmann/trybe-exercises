import { combineReducers } from 'redux';
import { VAI } from '../actions';

const INITIAL_STATE = {
  posts: [1, 2],
  subreddit: 'Oi',
  time: '13h30',
};

const redditReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case VAI:
     return {
       ...state,
       subreddit: 'vai',
     }
   default:
    return state;
 }
}

const rootReducer = combineReducers({ reddit: redditReducer })

export default rootReducer; 