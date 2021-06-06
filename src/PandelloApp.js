import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import login from './components/auth/login';
import Register from './components/auth/register';
import App from './App';
import Navbar from './components/Navbar';


function PandelloApp() {
    return (
        <div>
        <Navbar titulo="Pandello" />
            <BrowserRouter>
                <Route exact path="/login" component={login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/pandello" component={App}></Route>
            </BrowserRouter>
        </div>
    )
}

export default PandelloApp;
