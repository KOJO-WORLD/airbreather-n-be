import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import '../button.css';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>
        <span>Sign Up</span>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
