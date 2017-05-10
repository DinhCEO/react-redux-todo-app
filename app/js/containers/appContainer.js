import React from 'react'
import {connect} from 'react-redux'
import AppComponent from '../components/appTodo/appTodoComponent'
import {initTodo, addTodo, toggleTodo, resetTodo, setVisibilityFilter} from '../actions/index'
import {VisibilityFilters} from '../actions/searchTodoType'


const mapStateToProps = (state) => ({
    todos : getVisibleTodos(state.todos, state.visibilityFilter)
});
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
    }
};

const mapDispatchToProps = (dispatch) => ({
    initTodo : () => dispatch(initTodo()),
    addTodo : (text) => {
        dispatch(addTodo(text))
    },
    toggleTodo : (id) => {
        dispatch(toggleTodo(id))
    },
    filter : (filter) => {
        dispatch(setVisibilityFilter(filter))
    },
    resetTodo : () => {
        dispatch(resetTodo())
    }
});

const appContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default appContainer;


