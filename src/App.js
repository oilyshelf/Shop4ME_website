import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UserRoute} from "./Routes/userRoute";
import Home from "./Components/Allgemein/Home";
import {connect} from "./Connection/Websocket";
import 'antd/dist/antd.css';
import Login from "./Components/Bringer/Login";
import Shop from "./Components/Allgemein/Shop";
import Register from "./Components/Bringer/Register";
import logo from './Bilder/Logo.svg'


function App() {

    useEffect(()=>{
       //connect();
    },[]);



  return (
      <Router>
        <div >
            <h1><img src={logo} width="150px" height="150px" align="center" alt="Shop4Me"/> </h1>


          <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/login" exact component={Login}/>
            <Route path = "/register" exact component={Register}/>
            <Route path = "/shop" exact component={Shop}/>
          </Switch>

            <footer>
                <p><a href="./">&copy;2020 Shop4Me.com</a></p>
            </footer>

        </div>

      </Router>
  );
}

export default App;
