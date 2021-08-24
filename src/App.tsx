import React from 'react'
import Home from './pages/Home'
import { SignIn } from './pages/SignIn'
import { Route, Switch } from 'react-router-dom'

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
