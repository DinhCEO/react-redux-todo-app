import React from 'react';
import {VisibilityFilters} from '../../../actions/searchTodoType'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    float : 'right'
};

class FilterTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(filter) {
        let {dispatch_filter} = this.props;
        dispatch_filter(filter);
    }

    handleReset() {
        let {dispatch_reset} = this.props;
        dispatch_reset();
    }


    render() {

        return (
            <div>
                <FlatButton label="All" onClick={() => {
                    this.handleClick(VisibilityFilters.SHOW_ALL)
                }} primary={true}/>

                <FlatButton label="Active" onClick={() => {
                    this.handleClick(VisibilityFilters.SHOW_ACTIVE)
                }} primary={true}/>

                <FlatButton label="Completed" onClick={() => {
                    this.handleClick(VisibilityFilters.SHOW_COMPLETED)
                }} primary={true}/>
                <RaisedButton style={style} onClick={() => {
                    this.handleReset()
                }} className="btn-add-todo" type="button" label="Reset todo" primary={true}/>

            </div>
        );
    }
}

export default FilterTodo;