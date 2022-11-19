import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddSpotForm from '../AddSpotForm';
import '../../button.css';

function SpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='addHomeButton' onClick={() => setShowModal(true)}>
        Add your home
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddSpotForm modal={[showModal, setShowModal]} />
        </Modal>
      )}
    </>
  );
}

export default SpotFormModal;
