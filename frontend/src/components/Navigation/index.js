import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal/index';
import SpotFormModal from '../Spots/SpotFormModal/index';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';

import './Navigation.css';
import logo from './breathe-color.png'

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();

  const credential = 'Demo-lition'
  const password = 'password'

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='bar-right'>
        <SpotFormModal />
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} onClick={() => {}}/>
        <LoginFormModal />
        <SignupFormModal />
        <button className='demo' onClick={(e) => {
          e.preventDefault();
          dispatch(login({ credential, password }));
        }}>Demo</button>
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
