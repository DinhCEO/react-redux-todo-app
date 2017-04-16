import React from 'react';
import TodoItem from './todoItemConponent'

import {VisibilityFilters} from '../../actions/searchTodoType'
import {List} from 'material-ui/List';


class ListTodo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <List>
                    {
                        this.props.todos.map((todo, index) => {
                            return <TodoItem dispatch={this.props.toggleTodo} indexItem={index} key={index}
                                             item={todo}/>
                        })
                    }
                </List>
            </div>
        );
    }

}
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

function mapStateToProps(state) {
    //console.log('result filter = ', getVisibleTodos(state.todos, state.visibilityFilter));
    return {
        todos : getVisibleTodos(state.todos, state.visibilityFilter)
    };
}


export default ListTodo;