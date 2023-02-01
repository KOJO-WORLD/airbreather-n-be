import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { login } from '../../store/session';
import './Navigation.css';

function ProfileButton({ user, setLogin, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push('/')
  };

  const credential = 'Demo-lition'
  const password = 'password'

  return (
    <div className="profileButtonAndDropdown">
      <button className="profileButton" onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
        <i className="fa-solid fa-circle-user"></i>
      </button>
      {showMenu && (user ?
        <div className='dropDownLoggedIn'>
          <div className="credential">{user.username}</div>
          <div className="credential">{user.email}</div>
          <div className="divider" />
          <div>
            <NavLink to='/reservations'>
              <button className='logSignDemoButton'>
                Reservations
              </button>
            </NavLink>
          </div>
          <div className="divider" />
          <div>
            <button className='logSignDemoButton' onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
        :
        <div className='dropDownLoggedOut'>
          <div>
            <button className='logSignDemoButton' onClick={() => {
              setLogin(false)
              setShowModal(true)
            }}>
              Sign up
            </button>
          </div>
          <div>
            <button className='logSignDemoButton' onClick={() => {
              setLogin(true)
              setShowModal(true)
            }}>
              Log in
            </button>
          </div>
          <div className="divider" />
          <div>
            <button className='logSignDemoButton' onClick={(e) => {
              e.preventDefault();
              dispatch(login({ credential, password }));
            }}>
              Log in as demo user
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
