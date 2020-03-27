import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UserRoute} from "./Routes/userRoute";
import Home from "./Components/Allgemein/Home";

function App() {
  return (
      <Router>
        <div >

          <Switch>
            <Route path = "/" exact component={Home} />

          </Switch>

        </div>

      </Router>
  );
}

export default App;
