import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSpotReviewsThunk, deleteReviewThunk } from '../../store/reviews';
// import WriteReviewForm from './WriteReviewForm';

// import "./Spots.css"

// import SpotDetail from './SpotDetail';

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

    // function showForm() {
    //     setHidden(false)
    // }

    return (
        <main>
            <div className=''> *****REVIEWS*****
                {reviews.map((review) => {
                    return (
                        <div key={review.id}>
                            <div className=''>
                                <div>{review.stars}/5 stars</div>
                                <div>{review.review}</div>
                            </div>
                            {((sessionUser) && (review.userId === sessionUser.id)) && (
                                <button onClick={() => {
                                    dispatch(deleteReviewThunk(review.id));
                                    history.push(`/spots/${review.spotId}`);
                                }}>
                                    delete review
                                </button>
                            )}
                            <div>------------------------</div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default GetSpotReviews;
