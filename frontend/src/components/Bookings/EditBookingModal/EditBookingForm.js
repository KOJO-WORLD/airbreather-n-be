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
            <div className='editBookingModal'>
                <div className='editBookingDates'>
                    {errors[0] ? (<ul className='editBookingErrors'>
                        <li>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            {errors[0]}
                        </li>
                    </ul>) : <li className='editBookingErrorPlaceholder'>
                        <i className="fa-solid fa-circle-exclamation deleteBookingErrors"></i>
                    </li>}
                    <div className='editBookingInputs'>
                        <label>
                            <div className='editBookingLabel'>
                                Check-in
                            </div>
                            <input
                                required
                                placeholder='check-in'
                                className="editInputLeft"
                                type='date'
                                value={startDate}
                                onChange={updateStartDate} />
                        </label>
                        <label>
                            <div className='editBookingLabel'>
                                Check-out
                            </div>
                            <input
                                required
                                placeholder='check-out'
                                className="editInputRight"
                                type='date'
                                value={endDate}
                                onChange={updateEndDate} />
                        </label>
                    </div>
                </div>
                <button className='submitEditBooking' type="submit">
                    <span>Submit</span>
                </button>
            </div>
        </form >
    );
}

export default EditBookingForm;
