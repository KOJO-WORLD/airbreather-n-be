const GET_SPOTS = 'spots/GET';

const getSpots = (spots) => ({
    type: GET_SPOTS,
    spots
});

export const getAllSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`);

    if (response.ok) {
        const spotsData = await response.json();
        dispatch(getSpots(spotsData));
    }
};

const initialState = {
    spots: {}
  };

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SPOTS:
        const allSpots = {};
        action.spots.forEach(spot => {
          allSpots[spot.id] = spot;
        });
        return {
          ...allSpots,
          ...state,
        };
        default:
            return state;
        }
      }

      export default spotsReducer;
