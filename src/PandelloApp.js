import React from 'react'
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import login from './components/auth/login';
import Register from './components/auth/register';
import App from './App';
import Navbar from './components/navbar';


function PandelloApp() {
    return (
        <div>
        <Navbar titulo="Pandello" />
            <BrowserRouter>
                <Route  exact path="/" component={login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/pandello" component={App}></Route>
            </BrowserRouter>
        </div>
    )
}

export default PandelloApp;
