import React from 'react'
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

import ActionDone from 'material-ui/svg-icons/action/done';
import {pinkA200} from 'material-ui/styles/colors';


class TodoItem extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    handleClick(id) {
        let {dispatch} = this.props;
        dispatch(id);
    }

    render() {
        return (
            <ListItem onClick={() => {
                this.handleClick(this.props.item.id)
            }} rightIcon={this.props.item.completed ? <ActionDone color={pinkA200}/> : <ActionInfo />}>
                {this.props.item.text}
            </ListItem>
        )
    }
}
export default TodoItem;