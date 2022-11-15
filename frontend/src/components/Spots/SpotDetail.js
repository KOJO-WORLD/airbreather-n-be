import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpotForm from './EditSpotForm';
import { getSpotDetailThunk } from '../../store/spots';
import EditSpotForm from './EditSpotForm';

const SpotDetail = () => {

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
            <NavLink to={`/spots/${spotId}/edit`}>
                <button style={{ visibility: hidden ? 'visible' : 'hidden' }} onClick={() => showForm()}>Edit spot</button>
            </NavLink>
                <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
                    <EditSpotForm />
                </div>
            {/* <Route path={`/spots/${spotId}/edit`}>
                <EditSpotForm />
            </Route> */}



            {/* <div
          className="spot-image"
          style={{ backgroundImage: `url('${spot.imageUrl}')` }}
        ></div> */}
            {/* <div> */}
            {/* <h1 className="bigger">{spot.name}</h1>
                {(!showEditPokeForm && pokemon.captured) && (
            <button onClick={() => setEditSpotForm(true)}>Edit</button>
          )} */}
            {/* </div> */}
        </div >
    );
};

export default SpotDetail;
