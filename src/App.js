import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UserRoute} from "./Routes/userRoute";
import Home from "./Components/Allgemein/Home";
import {command, connect} from "./Connection/Websocket";
import 'antd/dist/antd.css';
import Login from "./Components/Bringer/Login";
import Shop from "./Components/Allgemein/Shop";
import Register from "./Components/Bringer/Register";
import logo from './Bilder/Shop4Me.png'
import Auftrag from "./Components/Bringer/Auftrag";
import MeinAuftrag from "./Components/Bringer/meinAuftrag";
import DerAuftrag from "./Components/Bringer/derAuftrag";
import Bestellung from "./Components/Allgemein/Bestellung";
import background from "./Bilder/background.png"
import "./App.css"


function App() {

    useEffect(()=>{
       connect();
        command(JSON.stringify({action:"getItems"}),NaN);

    },[]);



  return (
      <Router>
        <div className="container">
            <h1><img src={logo} width="280px" height="100px" align="center" alt="Shop4Me"/> </h1>


          <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/login" exact component={Login}/>
            <Route path = "/register" exact component={Register}/>
            <Route path = "/shop" exact component={Shop}/>
            <Route path = "/Bestellung" exact component={Bestellung}/>
            <UserRoute path = "/Errand" exact component = {Auftrag}/>
            <UserRoute path = "/myErrands" exact component = {MeinAuftrag}/>
            <UserRoute path="/Errand/:id"  component={DerAuftrag}/>

          </Switch>

            <footer>
                <p><a href="./">&copy;2020 Shop4Me.com</a></p>
            </footer>

        </div>

      </Router>
  );
}

export default App;
