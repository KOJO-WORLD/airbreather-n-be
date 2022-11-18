import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSpotReviewsThunk, deleteReviewThunk } from '../../store/reviews';
// import WriteReviewForm from './WriteReviewForm';

import "../Spots/Spots.css"
import "./reviews.css"

//get reviews for one spot
const GetSpotReviews = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const { spotId } = useParams();

    const reviews = useSelector(state => {
        if (!state.reviews.spotReviewsArr) return null;
        return state.reviews.spotReviewsArr.map((reviewObj) => {
            return reviewObj
        });
    });

    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getSpotReviewsThunk(spotId));
    }, [dispatch, spotId]);

    if (!reviews) {
        return null;
    }

    return (
        <main className='reviewsMain'>
            <div className='reviewsContainer'>
                <h2 className='reviewTitle'>Reviews:</h2>
                {reviews.map((review) => {
                    return (
                        <div key={review.id}>
                            <div className='reviewContent'>
                                <div>{review.stars}/5 stars</div>
                                <div>{review.review}</div>
                            </div>
                            {((sessionUser) && (review.userId === sessionUser.id)) && (
                                <button onClick={() => {
                                    dispatch(deleteReviewThunk(review.id));
                                    history.push(`/`);
                                }} className='deleteSpot'>
                                    <span className="text">Delete review</span>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default GetSpotReviews;
