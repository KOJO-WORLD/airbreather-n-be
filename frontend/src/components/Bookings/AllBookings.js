import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getUserBookingsThunk, deleteBookingThunk, editBookingThunk } from '../../store/bookings';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBookingModal/EditBookingForm';

import '../Spots/Spots.css'
import './Bookings.css'
import '../Navigation/Navigation.css'

const AllBookings = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);
    const [bookingIdState, setBookingIdState] = useState('');
    const [errors, setErrors] = useState([]);


    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) history.push('/')
    const bookings = useSelector(state => {
        if (!state.bookings?.bookingsArr) return null;
        return state.bookings?.bookingsArr.map((bookingObj) => bookingObj);
    });

    // const [bookings, setBookings] = useState('')
    // console.log('bookingsState', bookingsSate)
    // console.log('bookings', bookings)

    useEffect(() => {
        dispatch(getUserBookingsThunk());
    }, [dispatch, sessionUser?.id]);

    // useEffect(() => {
    //     if (bookingsSate?.length > 0) {
    //         setBookings(bookingsSate)
    //     }
    // }, [bookings])

    const getDay = (date) => {
        const dateObj = new Date(date);
        return dateObj.getDate();
    }

    const getMonthStr = (date) => {
        const dateObj = new Date(date);
        const dateToStr = dateObj.toDateString();
        return dateToStr.slice(3, 7);
    }

    const getYear = (date) => {
        const dateObj = new Date(date);
        return dateObj.getFullYear();
    }

    const handleDeleteBooking = (bookingId) => {
        setErrors([]);
        dispatch(deleteBookingThunk(bookingId)).then()
            .catch(async (res) => {
                const data = await res.json();
                if (data) {
                    setErrors(Object.values(data));
                    setTimeout(() => setErrors(''), 5000)
                }
            });
    }

    const handleEditBookingModal = (bookingId) => {
        setBookingIdState(bookingId);
        setShowModal(true);
    }

    return (
        <main clasname="main">
            <div className='bookingContainer'>
                {bookings?.length ?
                    <div>
                        <div className='reservationsTitle'>Reservations</div>
                        <div className='spotsContainer'>
                            {bookings.map((booking) => {
                                return (
                                    <div key={booking.id}>

                                        <NavLink key={booking.id} to={`/spots/${booking.spotId}`} className="spotLink">
                                            <div className='spotParent'>
                                                <img className='prevImg' src={booking?.Spot?.previewImage} alt='preview'></img>
                                                <div className='textContainer'>
                                                    <div className="spotDetailsList">
                                                        <div>
                                                            <div className="bookingSpotName">
                                                                {booking.Spot.name}
                                                            </div>
                                                            <div className="spotText">
                                                                {booking.Spot.city}, {booking.Spot.state}
                                                            </div>
                                                        </div>
                                                        <div className="reservationText">
                                                            {`${getMonthStr(booking.startDate)}
                                                    ${getDay(booking.startDate)}
                                                    ${getYear(booking.startDate)} -
                                                    ${getMonthStr(booking.endDate)}
                                                    ${getDay(booking.endDate)}
                                                    ${getYear(booking.endDate)}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                        {errors[0] ? (<ul className='deleteBookingErrors'>
                                            <li>
                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                {errors[0]}
                                            </li>
                                        </ul>) : <li className='errorPlaceholder'>
                                                <i className="fa-solid fa-circle-exclamation deleteBookingErrors"></i>
                                            </li>}
                                        <div className='bookingButtons'>
                                            <button className='addHomeButton'
                                                onClick={() => { handleEditBookingModal(booking.id) }}>
                                                Edit Reservation
                                            </button>

                                            {showModal && <Modal onClose={() => setShowModal(false)}>
                                                {<EditBookingForm setShowModal={setShowModal}
                                                    bookingId={bookingIdState}
                                                />}
                                            </Modal>}
                                            <button className='addHomeButton'
                                                onClick={() => handleDeleteBooking(booking.id)}>
                                                Cancel Reservation
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    :
                    <div className='reservationsTitle'>No Reservations</div>
                }
            </div>
        </main>
    );
};

export default AllBookings;
