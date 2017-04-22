import constants from './constants.js';

const setFilter = filter => {
	return {
		type: constants.actions.setFilter,
		filter
	}
};

let nextTodoId = 0;
const addTodo = text => {
  return {
    type: constants.actions.addTodo,
    text: text,
    id: nextTodoId++
  };
};

const toggleTodo = id => {
  return {
    type: constants.actions.toggleTodo,
    id
  };
};

export default {
	setFilter,
	addTodo,
	toggleTodo
}