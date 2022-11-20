import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpotForm from './EditSpotForm';
import { deleteSpotThunk, getSpotDetailThunk } from '../../store/spots';
import EditSpotForm from './EditSpotForm';
import GetSpotReviews from '../Reviews/GetSpotReviews';
import WriteReviewForm from '../Reviews/WriteReviewForm';
import '../button.css';

const SpotDetail = () => {

    const history = useHistory();

    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    // const [avgRating, setAvgRating] = useState(null);

    const sessionUser = useSelector(state => state.session.user);

    const { spotId } = useParams();

    const spot = useSelector(state => state.spots[spotId]);
    const reviews = useSelector(state => state.reviews.spotReviewsArr);

    let existingReview;
    let totalStars = 0;
    let avgRating = 0;

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
            <div className="spotDisplay">
                <img src={spot.previewImage} className='spotImage' alt='preview' />
                <div className="spotDetail">
                    {avgRating ? <h2 className='spotInfo'>{spot.name} ⭐️{avgRating}</h2> : ''}
                    <div className='spotInfo'>address: {spot.address} {spot.city} {spot.state} {spot.country}</div>
                    <p className='spotInfo'>price: ${spot.price}/night</p>
                    <p className='spotInfo'>description: {spot.description}</p>
                </div>
            </div>
            {
                ((sessionUser) &&
                    (spot.ownerId === sessionUser.id)) && (
                    <div>
                        <button onClick={() => {
                            dispatch(deleteSpotThunk(spotId));
                            history.push('/');
                        }} className="button">
                            <span className="submit">Delete spot</span>
                        </button>
                        <NavLink to={`/spots/${spotId}/edit`} style={{ textDecoration: 'none' }}>
                            {/* <button className="button" style={{ visibility: hidden ? 'visible' : 'hidden' }} onClick={() => showForm()}>
                                <span className="submit"> */}
                                    Edit spot
                                {/* </span>
                            </button> */}
                        </NavLink>
                        {/* <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
                            <EditSpotForm />
                        </div> */}
                    </div>
                )
            }
            {
                ((sessionUser) &&
                    (spot.ownerId !== sessionUser.id)) && (!existingReview) && (
                    <>
                        <button className="button" style={{ visibility: hidden2 ? 'visible' : 'hidden' }} onClick={() => { setHidden2(false) }}>
                            <span className="submit">
                                Leave review
                            </span>
                        </button>
                        <div style={{ visibility: hidden2 ? 'hidden' : 'visible' }}>

                            <WriteReviewForm spotId={spotId} hidden={[hidden2, setHidden2]} />


                        </div>
                    </>
                )
            }
            <GetSpotReviews />
        </div >
    );
};

export default SpotDetail;
