import React from 'react'
import {Link} from 'react-router'


class App extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h3>About</h3>
    }
}

class Inbox extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
};

class Message extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
};

const Dashboard = React.createClass({
    render() {
        return <div>Welcome to the app!</div>
    }
});

const routes = {
    path : '/',
    component : App,
    indexRoute : {component : Dashboard},
    childRoutes : [
        {path : 'about', component : About},
        {
            path : 'inbox',
            component : Inbox,
            childRoutes : [{
                path : 'messages/:id',
                onEnter : ({params}, replace) => replace(`/messages/${params.id}`)
            }]
        },
        {
            component : Inbox,
            childRoutes : [{
                path : 'messages/:id', component : Message
            }]
        }
    ]
}

export default routes;