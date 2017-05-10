import React from 'react';
import TodoItem from './todoItemConponent'
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
                        this.props.todos.map((todo,index) => {
                            return <TodoItem dispatch={this.props.toggleTodo}  key={index}
                                             item={todo}/>
                        })
                    }
                </List>
            </div>
        );
    }

}

export default ListTodo;