import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { login } from '../../store/session';
import './Navigation.css';

function ProfileButton({ user, setLogin, setShowModal }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
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
      {showMenu && (user ?
        <div >
          <div className="text">{user.username}</div>
          <div className="text">{user.email}</div>
          <div>
            <button className='button' onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
        :
        <div className="profile-dropdown">
          <div>
            <button onClick={() => {
              setLogin(true)
              setShowModal(true)
            }}>
              Log in
            </button>
          </div>
          <div>
            <button onClick={() => {
              setLogin(false)
              setShowModal(true)
            }}>
              Sign up
            </button>
            <button onClick={(e) => {
          e.preventDefault();
          dispatch(login({ credential, password }));
          }}>
              Log in as demo user
            </button>
          </div>
        </ div>
      )}
    </div>
  );
}

export default ProfileButton;
