import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/GET';
const GET_ONE = 'spots/GET_ONE';
const CREATE = 'spots/CREATE';
const UPDATE = 'spot/UPDATE';
const DELETE = 'spot/DELETE';

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

const deleteSpot = spotId => ({
  type: DELETE,
  spotId
});

export const addSpotThunk = (payload) => async (dispatch) => {
  const response = await csrfFetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const spot = await response.json();
    dispatch(addSpot(spot));
    return spot;
  }
};

export const editSpotThunk = (payload, spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
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

export const deleteSpotThunk = (spotId) => async (dispatch) => {
  console.log('SPO T ID IN THUNK: ', spotId);
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log('SPOR ID B+TO DISCPATCH: ', spotId);
    dispatch(deleteSpot(spotId))
  }
};

const initialState = {
  spots: []
};

// const spotsArr = []

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
        let newState = {
          ...state,
          [action.spot.id]: action.spot
        };
        let spotsArr = newState.spots.map(id => newState[id]);
        spotsArr.push(action.spots);
        newState.spotsArr = (action.spots);
        return newState;
      } else return {
        ...state,
        [action.spots]: {
          ...state[action.spots],
          ...action.spots
        }
      };
    case CREATE:
      let newState = {
        ...state,
        [action.spot.id]: action.spot
      };
      let createSpotsArr = Object.values(newState);
      newState.spotsArr = createSpotsArr.slice(0, -1);
      return newState;
    case UPDATE:
      const updateState = {
        ...state,
        [action.spot.id]: action.spot
      };
      let updateSpotsArr = Object.values(updateState);
      updateState.spotsArr = updateSpotsArr.slice(0, -2);
      return updateState;
    case DELETE:
      const deletedState = { ...state };
      delete deletedState[action.spotId]
      let spotsArr = Object.values(deletedState).slice(0, -2);
      delete deletedState[undefined];
      return {
        ...deletedState,
        spotsArr
      };
    default:
      return state;
  }
}

export default spotsReducer;
