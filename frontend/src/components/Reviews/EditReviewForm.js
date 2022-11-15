import ReviewForm from './ReviewForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditReviewForm = () => {

  const { reviewId } = useParams()
  const review = useSelector(state => {
      return state.reviews[reviewId]
    }
    );
    console.log(`LOOKIN FOR REVIEW AT ${reviewId}`, review )

  const editReview = {
    review: review.review,
    stars: review.stars
  };

  return (
    <ReviewForm editReview={editReview} formType="Edit Review" />
  );
}

export default EditReviewForm;
