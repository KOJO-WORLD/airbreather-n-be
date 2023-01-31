import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpotForm from './EditSpotForm';
import { deleteSpotThunk, getSpotDetailThunk } from '../../store/spots';
// import EditSpotForm from './EditSpotForm';
import GetSpotReviews from '../Reviews/GetSpotReviews';
import WriteReviewForm from '../Reviews/WriteReviewForm';
import BookingForm from '../Bookings/BookingForm';

import '../button.css';
import '../Reviews/reviews.css'

const SpotDetail = () => {

    const history = useHistory();

    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    // const [avgRating, setAvgRating] = useState(null);

    const sessionUser = useSelector(state => state.session.user);

    const { spotId } = useParams();


    const spot = useSelector(state => state.spots[spotId]);
    const reviews = useSelector(state => state.reviews.spotReviewsArr);

    // const ownerName = useSelector(state => state.session.user.firstName)

    let existingReview;
    let totalStars = 0;
    let avgRating = 0;
    let totalReviews = 0;

    if (reviews && sessionUser) {
        for (let review of reviews) {
            if (review.userId === sessionUser.id) {
                existingReview = true;
            }
        }
    }

    if (reviews) {
        for (let review of reviews) {
            totalStars += +review.stars;
            totalReviews += 1;
        }
        avgRating = totalStars / reviews.length;
    }

    if (avgRating) {
        let str = avgRating.toString()
        const arr = str.split('')
        if (arr.includes('.')) arr.splice(4)
        avgRating = +arr.join('')
    }

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getSpotDetailThunk(spotId))

    }, [dispatch, spotId]);

    if (!spot) {
        return null;
    }

    function showForm() {
        setHidden(false)
    }

    return (
        // (sessionUser) &&
        <div className="spotMain">
            <div>
                <div className="spotDisplay">
                    <div className='infoAboveImage'>
                        <div className='spotName'>
                            {spot.name}
                        </div>
                        <div>
                            {avgRating ? <span className="spotText">
                                <i className="fa-solid fa-star"></i>
                                {avgRating}&nbsp;·&nbsp;
                            </span> : ''}
                            <span className='spotText'>
                                {totalReviews} reviews&nbsp;·&nbsp;
                            </span>
                            <span className='spotInfo'>
                                <span className="spotText">
                                    {spot.city}, {spot.state}, {spot.country}
                                </span>
                            </span>
                        </div>
                    </div>
                    <img src={spot.previewImage} className='spotImage' alt='preview' />
                    <div className="infoBelowImage">
                        <span className="hostedBy">Home hosted by an owner</span>
                        <div className="guestBedBath">
                            4 guests&nbsp;·&nbsp;2 bedrooms&nbsp;·&nbsp;3 beds&nbsp;·&nbsp;2 baths
                        </div>
                        <div className="line"></div>
                        <div className="perksContainer">
                            <div className='perk'>
                                <div className='left'>
                                    <i className="fa-solid fa-desktop icon"></i>
                                </div>
                                <div>
                                    <div>
                                        Dedicated workspace
                                    </div>
                                    <div className="perksGreyed">
                                        A common area with wifi that's well-suited for working.
                                    </div>
                                </div>
                            </div>
                            <div className='perk'>
                                <div className='left'>
                                    <i className="fa-solid fa-door-open icon"></i>
                                </div>
                                <div >
                                    <div>
                                        Self check-in
                                    </div>
                                    <div className="perksGreyed">
                                        Check yourself in with the keypad.
                                    </div>
                                </div>
                            </div>
                            <div className='perk'>
                                <div className='left'>
                                    <i className="fa-regular fa-calendar icon"></i>
                                </div>
                                <div>
                                    &nbsp;&nbsp;Free cancellation for 48 hours
                                </div>
                            </div>
                        </div>
                        {/* <p className='spotInfo'>price: ${spot.price}/night</p> */}
                        <div className='line'></div>
                        <p className='spotInfo'>{spot.description}</p>
                        <div className='line'></div>
                    </div>
                    <div>
                        <BookingForm/>
                    </div>
                </div>
                {
                    ((sessionUser) &&
                        (spot.ownerId === sessionUser.id)) && (
                        <>
                            <div className="editDeleteButton">
                                <span>
                                    <NavLink to={`/spots/${spotId}/edit`} style={{ textDecoration: 'none' }}>
                                        <button className="writeEditDeleteButton">
                                            Edit your home
                                        </button>
                                    </NavLink>
                                </span>
                                <span>
                                    <button className="writeEditDeleteButton" onClick={() => {
                                        dispatch(deleteSpotThunk(spotId));
                                        history.push('/');
                                    }}>
                                        Delete this listing
                                    </button>
                                </span>
                            </div>
                            <div className="line"></div>
                        </>
                    )
                }
            </div>
            <div>
                {
                    ((sessionUser) &&
                        (spot.ownerId !== sessionUser.id)) && (!existingReview) && (
                        <>
                            {hidden2 && <button className="writeEditDeleteButton writeReviewButton" onClick={() => { setHidden2(false) }}>
                                Leave review
                            </button>}
                            {!hidden2 && <div className='reviewForm'>
                                <WriteReviewForm spotId={spotId} hidden={[hidden2, setHidden2]} />
                            </div>}
                            <div className="line"></div>
                        </>
                    )
                }
            </div>
            <div className="spotText reviewRating">
                {avgRating ? <span className="reviewRating">
                    <i className="fa-solid fa-star reviewRatingStar"></i>
                    {avgRating}&nbsp;·&nbsp;
                </span> : ''}
                <span className="reviewRating">
                    {totalReviews} reviews
                </span>
            </div>
            <div>
                <GetSpotReviews />
            </div>
        </div>
    );
};

export default SpotDetail;
