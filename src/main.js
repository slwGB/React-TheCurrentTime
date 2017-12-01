import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import configureStore from './store'
import Index from './containers/Index.js'

export const store = configureStore()

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Index}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)