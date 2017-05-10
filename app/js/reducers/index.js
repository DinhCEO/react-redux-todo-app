import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
    visibilityFilter,
    todos,
    form: formReducer
});

export default rootReducers;