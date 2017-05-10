import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
import reducersApp from './reducers/index'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import {teal900} from 'material-ui/styles/colors'

import {IntlProvider} from 'react-intl'
import {Router, browserHistory} from 'react-router'
import routers from './routers'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger();

injectTapEventPlugin();

const store = createStore(
    reducersApp,
    applyMiddleware(thunk)
);
console.log('state ====',store.getState());

const customTheme = getMuiTheme({
    fontFamily : 'Roboto, sans-serif',
    palette : {
        primary1Color : teal900
    }
});

ReactDOM.render(
    <IntlProvider locale="en">
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={browserHistory} routes={routers}/>
            </Provider>
        </MuiThemeProvider>
    </IntlProvider>,
    document.getElementById('root')
);
