import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ApplicationRoute from "./router/Application.routes";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ApplicationRoute />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
