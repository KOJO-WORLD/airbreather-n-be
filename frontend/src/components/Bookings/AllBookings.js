import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserBookingsThunk } from '../../store/bookings';
// import { writeReviewThunk } from '../../store/reviews';

import "../Spots/Spots.css"

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

    // if (!spots) {
    //     return null;
    // }

    return (
        <main clasname="main">
            <div>
                hiiiiiiiiii
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
                                            <div className="junkText">
                                                Reservation:
                                            </div>
                                            <div className="junkText"> Start Date {`${booking.startDate}`}</div>
                                            <div className="junkText"> End Date {`${booking.endDate}`}</div>
                                            {/* <div className="spotText price">
                                                <span style={{fontSize: "17px"}}>${booking.Spot.price}</span> night
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default AllBookings;
