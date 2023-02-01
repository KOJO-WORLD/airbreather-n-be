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
            {errors[0] ? (<ul className='errors'>
                <li>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors[0]}
                </li>
            </ul>) : ''}
            <div className='container addSpot'>
                <label>
                    check-in
                    <input
                        required
                        placeholder='check-in'
                        className="input top"
                        type='date'
                        value={startDate}
                        onChange={updateStartDate} />
                </label>
                <label>
                    check-out
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
            </div>
        </form>
    );
};

export default BookingForm;
