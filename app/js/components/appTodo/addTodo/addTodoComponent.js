import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './addTodoStyle.css'
import 'nprogress/nprogress.css'



class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleInput(e) {
        this.setState({value : e.target.value});
    }

    getData() {
        let {fetch} = this.props;
        fetch();
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
            <div>
                <form onSubmit={this.onSubmit} className="form-group">
                    <TextField floatingLabelText="Enter your item todo!" fullWidth={true} type="text"
                               value={this.state.value} onChange={this.handleInput}
                               hintText="Enter your item todo!"/>
                    <br/>
                    <RaisedButton className="btn-add-todo" type="submit" label="Add todo" primary={true}/>
                </form>
                <RaisedButton onClick={this.getData} className="btn-add-todo" type="button" label="Load data server"
                              primary={true}/>
            </div>
        );
    }
}

export default AddTodo;