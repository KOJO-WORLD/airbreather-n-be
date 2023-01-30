import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserBookingsThunk } from '../../store/bookings';
// import { writeReviewThunk } from '../../store/reviews';

import '../Spots/Spots.css'
import './Bookings.css'

// import SpotDetail from './SpotDetail';
// import AddSpotForm from './AddSpotForm';

const AllBookings = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const bookings = useSelector(state => {
        if (!state.bookings.bookingsArr) return null;
        return state.bookings.bookingsArr.map((bookingObj) => bookingObj);
    });

    console.log('bookings', bookings)


    // const reviews = useSelector(state => state.reviews.spotReviewsArr);

    useEffect(() => {
        dispatch(getUserBookingsThunk());
    }, [dispatch, sessionUser?.id]);

    // const getDateInfo = (date) => {

    //     const dateObj = new Date(date);
    //     const dateToStr = dateObj.toDateString();
    //     const monthStr = dateToStr.slice(3, 7);
    //     const day = (dateObj.getDate());
    //     const year = (dateObj.getFullYear());
    //   }

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

    return (
        <main clasname="main">
            <div>
                {bookings ?
                    <div>
                        <div className='reservationsTitle'>Reservations</div>
                        <div className='spotsContainer'>
                            {bookings.map((booking) => {
                                return (
                                    <NavLink key={booking.id} to={`/spots/${booking.spotId}`} className="spotLink">
                                        <div className='spotParent'>
                                            <img className='prevImg' src={booking?.Spot?.previewImage} alt='preview'></img>
                                            <div className='textContainer'>
                                                <div className="spotDetailsList">
                                                    <div>
                                                        <div className="spotText">
                                                            {booking.Spot.city}, {booking.Spot.state}
                                                        </div>
                                                        {/* {booking.Spot.avgRating &&
                                                <div className="spotText right">
                                                <i className="fa-solid fa-star"></i>
                                                {booking.Spot.avgRating}
                                                </div>
                                            } */}
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
                                );
                            })}
                        </div>
                    </div>
                    :
                    <div>no bookings</div>
                }
            </div>
        </main>
    );
};

export default AllBookings;
