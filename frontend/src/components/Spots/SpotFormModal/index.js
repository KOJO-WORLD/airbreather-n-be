import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddSpotForm from '../AddSpotForm';
import '../../button.css';

function SpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='button' onClick={() => setShowModal(true)}>
        <span>
          Add a spot
        </span>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddSpotForm modal={[showModal, setShowModal]}/>
        </Modal>
      )}
    </>
  );
}

export default SpotFormModal;
