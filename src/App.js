import React, { Component } from 'react';
import Login from './components/Login';
import Header from './components/Header'
import {BrowserRouter as Router} from "react-router-dom";
import {Switch} from "react-router-dom";
import SignUp from "./components/SignUp";
import {Route} from "react-router-dom";


class App extends Component {


    render() {
        return (
            <>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/signIn" component={Login} />
                    <Route path="/signUp" component={SignUp} />
                    <Route component={Header} />
                </Switch>
            </Router>
                </>
        );
    }
}

export default App;