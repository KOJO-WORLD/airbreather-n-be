const GET_SPOTS = 'spots/GET';
const GET_ONE = 'spots/GET_ONE';
const CREATE = 'spots/CREATE';
const UPDATE = 'spot/UPDATE'

const getAllSpots = (spots) => ({
  type: GET_SPOTS,
  spots
});

const getSpotDetail = (spot) => ({
  type: GET_ONE,
  spot
});

const addSpot = spot => ({
  type: CREATE,
  spot
});

const editSpot = spot => ({
  type: UPDATE,
  spot
});

export const addSpotThunk = (payload) => async (dispatch) => {
  console.log('PAYLOAD', payload)
  const response = await fetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  console.log('RESPONSE', response)

  if (response.ok) {
    const spot = await response.json();
    dispatch(addSpot(spot));
    return spot;
  }
};

export const getAllSpotsThunk = () => async dispatch => {
  const response = await fetch(`/api/spots`);
  if (response.ok) {
    const spotsData = await response.json();
    dispatch(getAllSpots(spotsData.Spots));
  }
};


export const getSpotDetailThunk = (spotId) => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}`)

  if (response.ok) {
    const spot = await response.json();
    dispatch(getSpotDetail(spot))
  }
}

export const editSpotThunk = (payload) => async (dispatch) => {
  const response = await fetch('/api/spots/spotId', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const spot = await response.json();
    dispatch(editSpot(spot));
    return spot;
  }
};

const initialState = {
  spots: []
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
        spotsArr: (action.spots)
      };
    case GET_ONE:
      if (!state[action.spot.id]) {
        const newState = {
          ...state,
          [action.spot.id]: action.spot
        };
        const spotsArr = newState.spots.map(id => newState[id]);
        spotsArr.push(action.spots);
        newState.spotsArr = (action.spots);
        return newState;
      } else return {
        ...state,
        [action.spots.id]: {
          ...state[action.spots.id],
          ...action.spots
        }
      };
    case CREATE:
      const newState = {
        ...state,
        [action.spot.id]: action.spot
      };
      const spotsArr = newState.map(id => newState[id]);
      spotsArr.push(action.spot);
      return newState;
    case UPDATE:
      return {
        ...state,
        [action.spot.id]: action.spot
      };
    default:
      return state;
  }
}

export default spotsReducer;
