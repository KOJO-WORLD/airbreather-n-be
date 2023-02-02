import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createBookingThunk } from '../../store/bookings';
import '../button.css';
import '../input.css';
import '../Errors/Errors.css';
import '../Spots/Spots.css'

const BookingForm = () => {

    const { spotId } = useParams();

    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const history = useHistory();

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errors, setErrors] = useState([]);

    const updateStartDate = (e) => setStartDate(e.target.value);
    const updateEndDate = (e) => setEndDate(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        if (!sessionUser) {
            return alert('You must be logged in to create a reservation.')
        }

        const payload = {
            spotId,
            startDate,
            endDate
        };
        return dispatch(createBookingThunk(payload)).then()
            .catch(async (res) => {
                const data = await res.json();
                if (data) setErrors(Object.values(data));
            });
    };

    return (
        <form onSubmit={handleSubmit} className='spotForm'>
            <div className='reserveTitle'> Reserve</div>
            {errors[0] ? (<ul className='createBookingErrors'>
                <li>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors[0]}
                </li>
            </ul>) : <li className='createBookingErrorPlaceholder'>
                        <i className="fa-solid fa-circle-exclamation deleteBookingErrors"></i>
                    </li>}
            <div className='container addSpot'>
                <div className='createBooking'>
                    <label className='createBookingLabel'>
                        check-in
                        <input
                            className="createInputLeft"
                            required
                            type='date'
                            value={startDate}
                            onChange={updateStartDate} />
                    </label>
                    <label className='createBookingLabel'>
                        check-out
                        <input
                            className="createInputRight"
                            required
                            type='date'
                            value={endDate}
                            onChange={updateEndDate} />
                    </label>
                </div>
                <button className='submitForm' type="submit">
                    <span>Create Reservation</span>
                </button>
            </div>
        </form>
    );
};

export default BookingForm;
