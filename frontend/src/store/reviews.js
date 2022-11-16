import { csrfFetch } from './csrf';

const GET_SPOT_REVIEWS = 'reviews/GET_SPOT_REVIEWS';
// const GET_ONE = 'spots/GET_ONE';
const CREATE = 'review/CREATE';
// const UPDATE = 'spot/UPDATE';
const DELETE = 'review/DELETE';

const getSpotReviews = (reviews) => ({
  type: GET_SPOT_REVIEWS,
  reviews
});

// const getSpotDetail = (spot) => ({
//   type: GET_ONE,
//   spot
// });

const writeReview = review => ({
  type: CREATE,
  review
});

// const editSpot = spot => ({
//   type: UPDATE,
//   spot
// });

const deleteReview = reviewId => ({
  type: DELETE,
  reviewId
});

export const writeReviewThunk = (payload) => async (dispatch) => {
  console.log('payload', payload, 'spotId: ', payload.spotId)
  const response = await csrfFetch(`/api/${payload.spotId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    console.log('write review success')
    const review = await response.json();
    dispatch(writeReview(review));
    return review;
  }
};

// export const editSpotThunk = (payload, spotId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/spots/${spotId}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload)
//   });

//   if (response.ok) {
//     const spot = await response.json();
//     dispatch(editSpot(spot));
//     return spot;
//   }
// };

// export const getReviewsThunk = () => async dispatch => {
//   const response = await fetch(`/api/spots`);
//   if (response.ok) {
//     const spotsData = await response.json();
//     dispatch(getAllSpots(spotsData.Spots));
//   }
// };

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
    console.log('response ok');
    dispatch(deleteReview(reviewId))
  }
};

const initialState = {
  reviews: []
};

// const spotsArr = []

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
    // case GET_ONE:
    //   if (!state[action.spot.id]) {
    //     let newState = {
    //       ...state,
    //       [action.spot.id]: action.spot
    //     };
    //     let spotsArr = newState.spots.map(id => newState[id]);
    //     spotsArr.push(action.spots);
    //     newState.spotsArr = (action.spots);
    //     return newState;
    //   } else return {
    //     ...state,
    //     [action.spots]: {
    //       ...state[action.spots],
    //       ...action.spots
    //     }
    //   };
    // case CREATE:
    //   let newState = {
    //     ...state,
    //     [action.spot.id]: action.spot
    //   };
    //   let createSpotsArr = Object.values(newState);
    //   newState.spotsArr = createSpotsArr.slice(0, -1);
    //   return newState;
    // case UPDATE:
    //   const updateState = {
    //     ...state,
    //     [action.spot.id]: action.spot
    //   };
    //   let updateSpotsArr = Object.values(updateState);
    //   updateState.spotsArr = updateSpotsArr.slice(0, -2);
    //   return updateState;
    case DELETE:
      const deletedState = { ...state };
      delete deletedState[action.reviewId]
      let reviewsArr = Object.values(deletedState).slice(0, -2);
      delete deletedState[undefined];
      return {
        ...deletedState,
        reviewsArr
      };
    default:
      return state;
  }
}

export default reviewsReducer;
