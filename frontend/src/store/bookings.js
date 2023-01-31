import { csrfFetch } from './csrf';

const GET_USER_BOOKINGS = 'bookings/GET_USER_BOOKINGS';
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

        case CREATE:
            let newState = {
                ...state,
                [action.booking.id]: action.booking
            };
            let createBookingsArr = Object.values(newState);
            newState.bookingsArr = createBookingsArr.slice(0, -1);
            return newState;

        case DELETE:
            const deletedState = { ...state };
            console.log('action.bookingId', action.bookingId)
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
