import {INIT_TODO, ADD_TODO, TOGGLE_TODO, RESET_TODO} from './todoActionType';
import {VisibilityFilters, SET_VISIBILITY_FILTER} from  './searchTodoType';

import axios from 'axios'
import NProgress from 'nprogress'



export const initTodo = () => (dispatch) => {
    NProgress.start();
   return axios.get('http://localhost:3003/api/get-data')
        .then(function (response) {
            NProgress.done();
            console.log('fire ajax = ', response.data);
            return dispatch({
                type : INIT_TODO,
                data : response.data
            })
        })
        .catch(function (error) {
            NProgress.done();
        });
};

export const addTodo = (text) => (dispatch) =>{
    axios.put(`http://localhost:3003/api/${text}`)
        .then(function (response) {
            console.log('fire ajax = ', response.data);
            return dispatch({
                type : ADD_TODO,
                data : response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });

};

export function resetTodo() {
    return {
        type : RESET_TODO
    }
}

export function toggleTodo(id) {
    return {
        type : TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter(filter) {
    return {
        type : SET_VISIBILITY_FILTER,
        filter
    }
}