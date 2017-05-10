import {INIT_TODO, ADD_TODO, TOGGLE_TODO, RESET_TODO} from '../actions/todoActionType';


function todos(state = [], action) {
    switch (action.type) {
        case INIT_TODO:
            return action.data;
            break;
        case ADD_TODO:
            return [
                ...state,
                action.data
            ];
            break;
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed : !todo.completed
                    })
                }
                return todo;
            });
            break;
        case RESET_TODO:
            return [];
            break;
        default:
            return state;
    }
}

export default todos;