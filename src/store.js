import {createStore, combineReducers} from 'redux';
import constants from './constants.js';

const todo = (state, action) => {
  switch(action.type) {
    case constants.actions.addTodo:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case constants.actions.toggleTodo:
      if(state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {
    case constants.actions.addTodo:
      return [
        ...state,
        todo(undefined, action)
      ];
    case constants.actions.toggleTodo:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const filter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case constants.actions.setFilter:
      return action.filter;
    default:
      return state;
  }
};

const toDoApp = combineReducers({
  todos,
  filter
});

export default createStore(toDoApp);