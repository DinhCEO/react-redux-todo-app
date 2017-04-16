/**
 * Created by dinhceo on 11/04/2017.
 */
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
import reducers from './reducers/index'
import Root from './routes'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {addTodo, toggleTodo} from './actions/index'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import {teal900} from 'material-ui/styles/colors'

import {IntlProvider} from 'react-intl'

injectTapEventPlugin();

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
console.log(store.getState());

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
                <Root />
            </Provider>
        </MuiThemeProvider>
    </IntlProvider>,
    document.getElementById('root')
);
