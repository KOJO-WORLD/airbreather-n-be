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

    const sessionUser = useSelector(state => state.session.user);

    const { spotId } = useParams();

    const spot = useSelector(state => state.spots[spotId]);
    const reviews = useSelector(state => state.reviews.spotReviewsArr);
    const reviewsObj = useSelector(state => state.reviews);

    let existingReview;

    if (reviews && sessionUser) {
        for (let review of reviews) {
            if (review.userId === sessionUser.id) existingReview = true;
        }
    }


    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getSpotDetailThunk(spotId))

    }, [dispatch, spotId, reviewsObj]);

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
                    <h2 className='spotInfo'>{spot.name} ⭐️{spot.avgRating}</h2>
                    <div className='spotInfo'>address: {spot.address} {spot.city} {spot.state} {spot.country}</div>
                    <p className='spotInfo'>price: ${spot.price}/night</p>
                    <p className='spotInfo'>description: {spot.description}</p>
                </div>
            </div>
            <GetSpotReviews />
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
                        <NavLink to={`/spots/${spotId}/edit`} style={{textDecoration: 'none'}}>
                            <button className="button" style={{ visibility: hidden ? 'visible' : 'hidden' }} onClick={() => showForm()}>
                                <span className="submit">
                                    Edit spot
                                </span>
                            </button>
                        </NavLink>
                        <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
                            <EditSpotForm />
                        </div>
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
            {/* <Route path={`/spots/${spotId}/edit`}>
                <EditSpotForm />
            </Route> */}
        </div >
    );
};

export default SpotDetail;
