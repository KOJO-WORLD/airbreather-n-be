import { csrfFetch } from './csrf';

const GET_USER_BOOKINGS = 'reviews/GET_USER_BOOKINGS';
const CREATE = 'booking/CREATE';
const DELETE = 'booking/DELETE';

const getUserBookings = (bookings) => ({
  type: GET_USER_BOOKINGS,
  bookings
});

const createBooking = booking => ({
  type: CREATE,
  booking
});

const deleteBooking = bookingId => ({
  type: DELETE,
  bookingId
});

// export const createBookingThunk = (payload) => async (dispatch) => {

//   const response = await csrfFetch(`/api/spots/${payload.spotId}/reviews`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload)
//   });

//   if (response.ok) {
//     const review = await response.json();
//     dispatch(writeReview(review));
//     return review;
//   }
// };

export const getUserBookingsThunk = () => async dispatch => {
    console.log('bout to fetch all user bookings')
  const response = await fetch(`/api/bookings/current`)

  if (response.ok) {
    const userBookings = await response.json();
    dispatch(getUserBookings(userBookings))
  }
}

export const deleteBookingThunk = (bookingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${bookingId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    dispatch(deleteBooking(bookingId))
  }
};

const initialState = {
  bookings: []
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BOOKINGS:
      const bookings = {};
      console.log('action.bookings: ', action.bookings.Bookings)
      action.bookings.Bookings.forEach(booking => {
        bookings[booking.id] = booking;
      });
      return {
        ...bookings,
        bookingsArr: (action.bookings.Bookings)
      };

    // case CREATE:
    //   let newState = {
    //     ...state,
    //     [action.review.id]: action.review
    //   };
    //   let createReviewsArr = Object.values(newState);
    //   newState.spotReviewsArr = createReviewsArr.slice(0, -1);
    //   return newState;

    // case DELETE:
    //   const deletedState = { ...state };
    //   delete deletedState[action.reviewId]
    //   delete deletedState.spotReviewsArr[action.reviewId]
    //   let spotReviewsArr = Object.values(deletedState).slice(0, -1);
    //   return {
    //     ...deletedState,
    //     spotReviewsArr
    //   };
    default:
      return state;
  }
}

export default bookingsReducer;
