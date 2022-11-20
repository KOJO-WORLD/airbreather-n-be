import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import '../button.css';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='button' onClick={() => setShowModal(true)}>
        <span>
          Log In
        </span>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='signUpLogInTop'>
            Log in
          </div>
          <div className='welcome'>
            Welcome to airbreatheNbe
          </div>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
