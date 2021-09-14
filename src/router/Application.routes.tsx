import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../Pages/HomePage.page";
import SingleCharacter from "../Pages/SingleCharacter.page";

const ApplicationRoute: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id" component={SingleCharacter} />
    </>
  );
};

export default ApplicationRoute;
