import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal/index';
import SpotFormModal from '../Spots/SpotFormModal/index';
import './Navigation.css';
import logo from './breathe5.png'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <SpotFormModal />
      </>
    );
  }

  return (
    <div className='bar'>
      <div>
        <NavLink exact to="/" className="nvlnk">
          <img src={logo} className="img" alt="home logo"/>
          <p className="logo">
            airbreatheNbe
          </p>
        </NavLink>
      </div>
      <div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
