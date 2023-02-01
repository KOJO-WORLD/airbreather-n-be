import { csrfFetch } from './csrf';

const GET_USER_BOOKINGS = 'bookings/GET_USER_BOOKINGS';
const CREATE = 'booking/CREATE';
const UPDATE = 'booking/UPDATE';
const DELETE = 'booking/DELETE';

const getUserBookings = (bookings) => ({
    type: GET_USER_BOOKINGS,
    bookings
});

const createBooking = booking => ({
    type: CREATE,
    booking
});

const editBooking = booking => ({
    type: UPDATE,
    booking
  });

const deleteBooking = bookingId => ({
    type: DELETE,
    bookingId
});

export const createBookingThunk = (payload) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/${payload.spotId}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const booking = await response.json();
        dispatch(createBooking(booking));
        return booking;
    }
};

export const getUserBookingsThunk = () => async dispatch => {
    // console.log('bout to fetch all user bookings')
    const response = await fetch(`/api/bookings/current`)

    if (response.ok) {
        const userBookings = await response.json();
        // console.log('userBookings res, ', userBookings)
        dispatch(getUserBookings(userBookings))
    }
}

export const editBookingThunk = (payload, bookingId) => async (dispatch) => {
    console.log('edit booking thunk booking id', bookingId)
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const booking = await response.json();
      dispatch(editBooking(booking));
      return booking;
    }
  };

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
            // console.log('action.bookings: ', action.bookings.Bookings)
            action.bookings.Bookings.forEach(booking => {
                bookings[booking.id] = booking;
            });
            return {
                ...bookings,
                bookingsArr: (action.bookings.Bookings)
            };

        case CREATE:
            let newState = {
                ...state,
                [action.booking.id]: action.booking
            };
            let createBookingsArr = Object.values(newState);
            newState.bookingsArr = createBookingsArr.slice(0, -1);
            return newState;

        case UPDATE:
            const updateState = {
                ...state,
                [action.booking.id]: action.booking
            };
            console.log('action.booking in update reducer: ', action.booking)
            let updateBookingsArr = Object.values(updateState);
            console.log('updated bookings Array: ', updateBookingsArr)
            updateState.bookingsArr = updateBookingsArr.slice(0, -1);
            console.log('updated state @ bookings Array: ', updateState.bookingsArr)
            delete updateState[undefined];
            return updateState;

        case DELETE:
            const deletedState = { ...state };
            // console.log('action.bookingId', action.bookingId)
            delete deletedState[action.bookingId]
            delete deletedState.bookingsArr[action.bookingId]
            let bookingsArr = Object.values(deletedState).slice(0, -1);
            return {
                ...deletedState,
                bookingsArr
            };
        default:
            return state;
    }
}

export default bookingsReducer;
