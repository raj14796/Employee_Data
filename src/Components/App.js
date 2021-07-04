import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import UserDataPage from './UserDataPage'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/userData'><UserDataPage /></Route>
                    <Route exact path='/'><LoginPage /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
