import React from 'react'
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

import ActionDone from 'material-ui/svg-icons/action/done';
import {pinkA200} from 'material-ui/styles/colors';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(index) {
        let {dispatch} = this.props;
        dispatch(index);
    }

    render() {
        let index = this.props.indexItem;
        return (
            <ListItem onClick={() => {
                this.handleClick(index)
            }} rightIcon={this.props.item.completed ? <ActionDone color={pinkA200}/> : <ActionInfo />}>
                {this.props.item.text}
            </ListItem>
        )
    }
}
export default TodoItem;