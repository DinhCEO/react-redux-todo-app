import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
import { RaisedButton } from 'material-ui'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import { AppBar, Paper } from 'material-ui';


const renderTextFieldUsername = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               fullWidth={true}
               errorText={touched && error}
               type="text"
               {...input}
               {...custom}/>
);
const renderTextFieldPassword = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               type="password"
               floatingLabelText={label}
               fullWidth={true}
               errorText={touched && error}
               {...input}
               {...custom}/>
);

const validate = values => {
    const errors = {};
    const requiredFields = [ 'username', 'password'];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Required'
        }
    });
    return errors
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;
        return (
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <AppBar showMenuIconButton={false} title="Login App" />
                        <form onSubmit={ handleSubmit }>
                            <div>
                                <Field name="username" component={renderTextFieldUsername} label="Enter username!"/>
                            </div>
                            <div>
                                <Field name="password" component={renderTextFieldPassword} label="Enter password!"/>
                            </div>
                            <RaisedButton
                                label="Login"
                                labelPosition="before"
                                primary
                                icon={<ChevronRight />}
                                type="submit"
                                disabled={pristine || submitting || invalid}
                            />
                        </form>
                    </div>
                    <div className="col-md-3"/>
                    <div className="clearfix"/>
                </div>
        )
    }
}
Login = reduxForm({
    validate,
    form : "loginForm"
})(Login);

export default Login;