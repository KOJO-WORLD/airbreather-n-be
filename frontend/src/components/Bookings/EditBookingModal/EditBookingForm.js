import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../button.css';
import '../../input.css';
import { editBookingThunk } from '../../../store/bookings';
// import exMark from '../Errors/exMark.png'
import '../../Errors/Errors.css';

function EditBookingForm({ setShowModal, bookingId }) {
    const dispatch = useDispatch();

    // console.log('spot id: ', spotId)

    const sessionUser = useSelector(state => state.session.user);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errors, setErrors] = useState([]);

    const updateStartDate = (e) => setStartDate(e.target.value);
    const updateEndDate = (e) => setEndDate(e.target.value);

    // if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        const payload = {
            startDate,
            endDate
        };

        return dispatch(editBookingThunk(payload, bookingId))
            .then(() => setShowModal(false))
            .catch(async (res) => {
                const data = await res.json();
                if (data) setErrors(Object.values(data));
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            {errors[0] ? (<ul className='errors'>
                <li>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors[0]}
                </li>
            </ul>) : ''}
            <label>
                    <input
                        required
                        placeholder='check-in'
                        className="input top"
                        type='date'
                        value={startDate}
                        onChange={updateStartDate} />
                </label>
                <label>
                    <input
                        required
                        placeholder='check-out'
                        className="input top"
                        type='date'
                        value={endDate}
                        onChange={updateEndDate} />
                </label>
                <button className='submitForm' type="submit">
                    <span>Create Reservation</span>
                </button>
        </form >
    );
}

export default EditBookingForm;
