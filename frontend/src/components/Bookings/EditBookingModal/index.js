import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditBookingForm from './EditBookingForm';
import '../../button.css';

function EditBookingModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='button' onClick={() => setShowModal(true)}>
        <span>
          Edit Reservation
        </span>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBookingForm />
        </Modal>
      )}
    </>
  );
}

export default EditBookingModal;
