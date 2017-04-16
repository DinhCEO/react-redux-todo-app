import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './addTodoStyle.css'


class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({value : e.target.value});
    }

    onSubmit(e) {
        let {dispatch} = this.props;
        e.preventDefault();
        if (!this.state.value) {
            return;
        }
        dispatch(this.state.value);
        this.setState({value : ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-group">
                <TextField floatingLabelText="Enter your item todo!" fullWidth={true} type="text"
                           value={this.state.value} onChange={this.handleInput}
                           hintText="Enter your item todo!"/>
                <br/>
                <RaisedButton className="btn-add-todo" type="submit" label="Add todo" primary={true}/>
            </form>
        );
    }
}

export default AddTodo;