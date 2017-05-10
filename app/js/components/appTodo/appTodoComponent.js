import React from 'react'
import AddTodo from './addTodo/addTodoComponent'
import ListTodo from './todos/listTodoComponent'
import FilterTodo from './filterTodo/filterTodoComponent'
import Header      from '../header/headerComponent'
import LoginForm    from '../loginForm/loginForm'
import {AuthenticationService} from '../../services/index'
import {SubmissionError} from 'redux-form';

const style = {
    marginTop : 100
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.authenticationService = AuthenticationService;
        console.log('container root = ', props);
        this.submit = this.submit.bind(this);
    }

    submit(values) {
        console.log(this.props);
        console.log("submited ====> ", values);
        return new Promise((resolve, reject) => {
            this.authenticationService.authUsernamePassword(values.username, values.password)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                });
        });
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-2"/>
                <div className="col-md-8">
                    {this.props.children}
                    <Header/>
                    <LoginForm onSubmit={this.submit}/>
                    <br/>
                    <AddTodo fetch={this.props.initTodo} dispatch={this.props.addTodo}/>
                    <ListTodo dispatch_initTodo={this.props.initTodo} toggleTodo={this.props.toggleTodo}
                              todos={this.props.todos}/>
                    <FilterTodo dispatch_filter={this.props.filter} dispatch_reset={this.props.resetTodo}/>
                </div>
                <div className="col-md-2"/>
                <div className="clearfix"></div>
            </div>

        )
    }
}

export default App