import ReviewForm from './ReviewForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WriteReviewForm = (spotId, hidden) => {

    const sessionUser = useSelector(state => state.session.user);

    const writeReview = {
        spotId: spotId.spotId,
        userId: sessionUser.id,
        review: '',
        stars: 0
    };

    return (
        <ReviewForm writeReview={writeReview} hidden={hidden} spotId={spotId} />
    );
}

export default WriteReviewForm;
