import React from 'react'
import {Router, Route, browserHistory, hashHistory, IndexRoute} from 'react-router'
import App from './components/appComponent'

import {
    LayoutComponent
} from './containers/index'

const style404 = {
    textAlign : 'center'
};

const NotFoundComponent = () => (
    <div style={style404}>
        <img src="img/404.dm.png"/>
        <h2 className="text-center">404 - Not found</h2>
    </div>
);

const Root = () => (
    <Router history={hashHistory}>
        <Route path='/' component={LayoutComponent}>
            <IndexRoute component={App}/>
            <Route path='*' component={NotFoundComponent}/>
        </Route>
    </Router>
);

export default Root;
