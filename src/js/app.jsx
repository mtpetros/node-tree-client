import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import store from 'Reducers/store'

import Tree from 'Components/Tree'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='main'>
          <Switch>
            <Route exact path='/tree' component={Tree} />
            <Redirect to='/tree' />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
