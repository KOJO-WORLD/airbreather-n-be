import { csrfFetch } from './csrf';

const GET_SPOT_REVIEWS = 'reviews/GET_SPOT_REVIEWS';
const CREATE = 'review/CREATE';
const DELETE = 'review/DELETE';

const getSpotReviews = (reviews) => ({
  type: GET_SPOT_REVIEWS,
  reviews
});

const writeReview = review => ({
  type: CREATE,
  review
});

const deleteReview = reviewId => ({
  type: DELETE,
  reviewId
});

export const writeReviewThunk = (payload) => async (dispatch) => {

  const response = await csrfFetch(`/api/spots/${payload.spotId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(writeReview(review));
    return review;
  }
};

export const getSpotReviewsThunk = (spotId) => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}/reviews`)

  if (response.ok) {
    const spotReviews = await response.json();
    dispatch(getSpotReviews(spotReviews))
  }
}

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    dispatch(deleteReview(reviewId))
  }
};

const initialState = {
  reviews: []
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOT_REVIEWS:
      const spotReviews = {};
      action.reviews.Reviews.forEach(review => {
        spotReviews[review.id] = review;
      });
      return {
        ...spotReviews,
        spotReviewsArr: (action.reviews.Reviews)
      };

    case CREATE:
      let newState = {
        ...state,
        [action.review.id]: action.review
      };
      let createReviewsArr = Object.values(newState);
      newState.spotReviewsArr = createReviewsArr.slice(0, -1);
      return newState;

    case DELETE:
      const deletedState = { ...state };
      delete deletedState[action.reviewId]
      delete deletedState.spotReviewsArr[action.reviewId]
      let spotReviewsArr = Object.values(deletedState).slice(0, -1);
      return {
        ...deletedState,
        spotReviewsArr
      };
    default:
      return state;
  }
}

export default reviewsReducer;
