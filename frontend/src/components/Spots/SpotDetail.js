import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpotForm from './EditSpotForm';
import { deleteSpotThunk, getSpotDetailThunk } from '../../store/spots';
import EditSpotForm from './EditSpotForm';
import GetSpotReviews from '../Reviews/GetSpotReviews';
import WriteReviewForm from '../Reviews/WriteReviewForm';
import './Spots.css';

const SpotDetail = () => {

    const history = useHistory();

    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);

    const sessionUser = useSelector(state => state.session.user);

    const { spotId } = useParams();

    const spot = useSelector(state => state.spots[spotId]);
    const reviews = useSelector(state => state.reviews.spotReviewsArr);

    let existingReview;

    if (reviews) {
        for (let review of reviews) {
            if(review.userId === sessionUser.id) existingReview = true;
        }
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
                    <h2 className='spotInfo'>{spot.name}</h2>
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
                        <NavLink to={`/spots/${spotId}/edit`}>
                            <button style={{ visibility: hidden ? 'visible' : 'hidden' }} onClick={() => showForm()}>Edit spot</button>
                        </NavLink>
                        <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
                            <EditSpotForm />
                        </div>
                        <button onClick={() => {
                            dispatch(deleteSpotThunk(spotId));
                            history.push('/');
                        }}>Delete spot</button>
                    </div>
                )
            }
            {
                ((sessionUser) &&
                    (spot.ownerId !== sessionUser.id)) && (!existingReview) &&(
                    <>
                        <button style={{ visibility: hidden2 ? 'visible' : 'hidden' }} onClick={() => { setHidden2(false) }}>Leave a review</button>
                        <div style={{ visibility: hidden2 ? 'hidden' : 'visible' }}>
                            {/* <Route path='/reviews/new'> */}
                            <WriteReviewForm spotId={spotId} hidden={[hidden2, setHidden2]} />
                            {/* </Route> */}

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
