import React from 'react'
import {Link} from 'react-router'
import SlickComponent from '../components/slickComponent/slickComponent'
import SlickComponent2 from '../components/slickComponent/Carousel'





const style404 = {
    textAlign : 'center'
};

const NotFoundComponent = () => (
    <div style={style404}>
        <img src="img/404.dm.png"/>
        <h2 className="text-center">404 - Not found</h2>
    </div>
);

class AppInit extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className="container">
                <h2>Hello from to appInit!</h2>
                <ul>
                    <li><Link to="/page-1">About</Link></li>
                    <li><Link to="/page-2">Inbox</Link></li>
                    <li><Link to="/demo-slick">Demo-slick</Link></li>
                    <li><Link to="/demo-slick-2">Demo-slick-2</Link></li>
                    <li><Link to="/map">Demo-map</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Welcome to the app!</div>
    }
}
class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>Page-2</h2>
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

class Map extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>map :D</h1>
        )
    }
}



const routers = {
    path : '/',
    name : 'Home',
    component : AppInit,
    indexRoute : {component : Dashboard},
    onEnter : (nextState, replace) => {
        // console.log(nextState, replace);
    },
    childRoutes : [
        {
            path : 'page-1',
            component : About,
            onEnter : (nextState, replace) => {
                console.log(nextState, replace);
            },
        },
        {
            path : 'page-2',
            component : Page2,
        },
        {
            path : 'demo-slick',
            component : SlickComponent,
        },
        {
            path : 'demo-slick-2',
            component : SlickComponent2,
        },
        {
            path : 'map',
            component : Map,
        },
        {
            path : '*',
            component : NotFoundComponent
        }
    ]
};

export default routers;
