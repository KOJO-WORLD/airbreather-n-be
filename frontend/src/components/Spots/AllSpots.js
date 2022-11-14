import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { getAllSpotsThunk } from '../../store/spots';
// import "./Spots.css"

import SpotDetail from './SpotDetail';
import AddSpotForm from './AddSpotForm';

const AllSpots = () => {
    const dispatch = useDispatch();
    const [hidden, setHidden] = useState(true);

    // const { spotId } = useParams();

    const spots = useSelector(state => {
        if (!state.spots.spotsArr) return null;
        return state.spots.spotsArr.map((spotObj) => spotObj);
    });

    useEffect(() => {
        dispatch(getAllSpotsThunk());
    }, [dispatch]);

    if (!spots) {
        return null;
    }

    function showForm() {
        setHidden(false)
    }

    return (
        <main>
            <div>
                {spots.map((spot) => {
                    return (
                        <NavLink key={spot.id} to={`/spots/${spot.id}`}>
                            <div>{spot.name}</div>
                        </NavLink>
                    );
                })}
                <NavLink to='/spots/new'>
                <button style={{ visibility: hidden ? 'visible' : 'hidden' }} onClick={() => showForm()}>Add a spot</button>
                <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
                    <AddSpotForm />
                </div>
                </NavLink>
                <Switch>
                    <Route path="/spots/:spotId">
                        <SpotDetail />
                    </Route>
                    <Route path="/spots/new">
                        <AddSpotForm />
                    </Route>
                </Switch>
            </div>
        </main>
    );
};

export default AllSpots;
