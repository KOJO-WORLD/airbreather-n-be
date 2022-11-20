import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { login } from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    console.log('openMenu');
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const credential = 'Demo-lition'
  const password = 'password'

  return (
    <div className="profile-dropdown">
      <button className="profileButton" onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
        <i className="fa-solid fa-circle-user"></i>
      </button>
      {showMenu && !user && (
        <div className="dropdown-menu">
          <div>
            <LoginFormModal />
            <SignupFormModal />
            <button onClick={(e) => {
              e.preventDefault();
              dispatch(login({ credential, password }));
            }}>Demo</button>
          </div>
        </div>
      )}
      {showMenu && user && (
        <div className="dropdown-menu">
          <div className="text">{user.username}</div>
          <div className="text">{user.email}</div>
          <div>
            <button className='button' onClick={logout}>
              <span className="submit">Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
