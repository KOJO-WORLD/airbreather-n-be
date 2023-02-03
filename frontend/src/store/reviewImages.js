import { csrfFetch } from './csrf';

const CREATE = 'review/CREATE';
const DELETE = 'review/DELETE';

const createReviewImage = reviewImage => ({
    type: CREATE,
    reviewImage
});

const deleteReviewImages = reviewImageId => ({
    type: DELETE,
    reviewImageId
});

export const createReviewImageThunk = (payload) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/${payload.spotId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(createReviewImage(review));
        return review;
    }
};

export const deleteReviewImageThunk = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        dispatch(deleteReviewImages(reviewId))
    }
};

const initialState = {
    reviews: []
};

const reviewImagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE:
            let newState = {
                ...state,
                [action.reviewImage.id]: action.reviewImage
            };
            let createReviewImagesArr = Object.values(newState);
            newState.spotReviewImagesArr = createReviewImagesArr.slice(0, -1);
            return newState;

        case DELETE:
            const deletedState = { ...state };
            delete deletedState[action.reviewImageId]
            delete deletedState.spotReviewImagesArr[action.reviewImageId]
            let spotReviewImagesArr = Object.values(deletedState).slice(0, -1);
            return {
                ...deletedState,
                spotReviewImagesArr
            };
        default:
            return state;
    }
}

export default reviewImagesReducer;
