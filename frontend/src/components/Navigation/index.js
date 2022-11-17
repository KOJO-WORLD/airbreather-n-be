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
      <div className='bar-right'>
        <ProfileButton user={sessionUser} />
        <SpotFormModal />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <button className='demo'>Demo</button>
      </>
    );
  }

  return (
    <div className='bar'>
      <NavLink exact to="/" className="nvlnk">
        <img src={logo} className="img" alt="home logo" />
        <p className="logo">airbreatheNbe</p>
      </NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
