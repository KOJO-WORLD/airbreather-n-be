import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormModal/index';
// import SignupFormPage from "./components/SignupFormPage/index";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllSpots from './components/Spots/AllSpots';

import SpotDetail from './components/Spots/SpotDetail';
// import AddSpotForm from './components/Spots/AddSpotForm';
import EditSpotForm from './components/Spots/EditSpotForm';
// import AddSpotForm from './components/Spots/AddSpotForm';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/"><AllSpots /></Route>
          <Route path="/spots/:spotId/edit"><EditSpotForm /></Route>
          <Route path="/spots/:spotId"><SpotDetail /></Route>
          {/* <Route path="/spots"><AddSpotForm /></Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
