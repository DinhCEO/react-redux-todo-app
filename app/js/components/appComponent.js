import React from 'react'
import AddTodo from './addTodo/addTodoComponent'
import ListTodo from './todos/listTodoComponent'
import FilterTodo from './filterTodo/filterTodoComponent'

const style = {
    marginTop : 100
};

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('container root = ', props);
        this.props = props;
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4"/>
                <div className="col-md-6">
                    <br/>
                    <AddTodo dispatch={this.props.addTodo}/>
                    <ListTodo toggleTodo={this.props.toggleTodo} todos={this.props.todos}/>
                    <FilterTodo dispatch_filter={this.props.filter} dispatch_reset={this.props.resetTodo}/>
                </div>
                <div className="col-md-2"/>
            </div>
        )
    }
}

export default App