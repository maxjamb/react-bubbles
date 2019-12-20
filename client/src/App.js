import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import { PrivateRoute } from "./components/privateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/colors" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
