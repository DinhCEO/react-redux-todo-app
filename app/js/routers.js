import React from 'react'
import LoginComponent from './components/LoginInit/LoginInit'
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
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}


const routers = {
    path : '/',
    name : 'Home',
    component : AppInit,
    indexRoute : {component : LoginComponent},
    onEnter : (nextState, replace) => {
    },
    childRoutes : [
        {
            path : '*',
            component : NotFoundComponent
        }
    ]
};

export default routers;

