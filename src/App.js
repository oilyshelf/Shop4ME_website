import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UserRoute} from "./Routes/userRoute";
import Home from "./Components/Allgemein/Home";
import {connect} from "./Connection/Websocket";
import 'antd/dist/antd.css';
import Login from "./Components/Bringer/Login";


function App() {

    useEffect(()=>{
       //connect();
    },[]);

  return (
      <Router>
        <div >

          <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/login" exact component={Login}/>
          </Switch>

        </div>

      </Router>
  );
}

export default App;
