import React from 'react'
import LoginForm from '../loginForm/loginForm'
import {authenticationService} from './../../services/index'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.authenticationService = authenticationService;
        this.submit = this.submit.bind(this);
    }

    submit(values) {
        return this.authenticationService.authByUsernamePassword(values.username, values.password)
            .then((res) =>{
                console.log(res);
            }).catch(error =>{
                console.log(error);
            });
    };


    render() {
        return (<LoginForm onSubmit={this.submit}/>);
    }
}
export default LoginComponent;