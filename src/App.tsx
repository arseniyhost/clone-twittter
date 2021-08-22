import React from 'react'
import { SignIn } from './pages/SignIn'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
