import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupForm from '../SignupFormModal/SignupForm';
import SpotFormModal from '../Spots/SpotFormModal/index';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import { Modal } from '../../context/Modal';

import './Navigation.css';
import logo from './breathe-color.png'

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [Login, setLogin] = useState(true);

  // const credential = 'Demo-lition'
  // const password = 'password'

  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <div className='bar-right'>
  //       <SpotFormModal />
  //       <ProfileButton user={sessionUser} />
  //     </div>
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginForm />
  //       <SignupForm />
  //       <button className='demo' onClick={(e) => {
  //         e.preventDefault();
  //         dispatch(login({ credential, password }));
  //       }}>Demo</button>
  //     </>
  //   );
  // }

  return (
    <div className='bar'>
      <NavLink exact to="/" className="nvlnk">
        <img src={logo} className="img" alt="home logo" />
        <p className="logo">airbreatheNbe</p>
      </NavLink>
      {isLoaded &&
        <div className='bar-right'>
          <SpotFormModal />
          <ProfileButton
            user={sessionUser}
            setLogin={setLogin}
            setShowModal={setShowModal} />
        </div>}
      {showModal && <Modal onClose={() => setShowModal(false)}>
        {Login ? <LoginForm setShowModal={setShowModal} /> :
          <SignupForm setShowModal={setShowModal} />}
      </Modal>}
    </div>
  );
}

export default Navigation;
