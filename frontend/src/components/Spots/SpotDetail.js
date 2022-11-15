import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpotForm from './EditSpotForm';
import { deleteSpotThunk, getSpotDetailThunk } from '../../store/spots';
import EditSpotForm from './EditSpotForm';
import GetSpotReviews from '../Reviews/GetSpotReviews';
// import DeleteSpot from '../../store/spots';

const SpotDetail = () => {

    const history = useHistory();

    const [hidden, setHidden] = useState(true);

    const { spotId } = useParams();
    const spot = useSelector(state => state.spots[spotId]);
    //   const [editSpotForm, setEditSpotForm] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getSpotDetailThunk(spotId))
    }, [dispatch, spotId]);

    if (!spot) {
        return null;
    }

    function showForm() {
        setHidden(false)
    }

    return (
        <div>
            <div>
                <h2>{spot.name}</h2>
                <ul>address
                    <li>
                        {spot.address} {spot.city} {spot.state} {spot.country}
                    </li>
                </ul>
                <p>${spot.price}/night</p>
                <p>{spot.description}</p>
            </div>
            <GetSpotReviews />
            <NavLink to={`/spots/${spotId}/edit`}>
                <button style={{ visibility: hidden ? 'visible' : 'hidden' }} onClick={() => showForm()}>Edit spot</button>
            </NavLink>
            <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
                <EditSpotForm />
            </div>
            <button onClick={() => {
                dispatch(deleteSpotThunk(spotId));
                history.push('/');
            }}>Delete spot</button>
            {/* <Route path={`/spots/${spotId}/edit`}>
                <EditSpotForm />
            </Route> */}
        </div >
    );
};

export default SpotDetail;
