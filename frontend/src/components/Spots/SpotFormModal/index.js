import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddSpotForm from '../AddSpotForm';
import '../../button.css';

function SpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='icon-btn add-btn' onClick={() => setShowModal(true)}>
        <div className="add-icon"></div>
        <div className="btn-txt">Add a spot</div>
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
