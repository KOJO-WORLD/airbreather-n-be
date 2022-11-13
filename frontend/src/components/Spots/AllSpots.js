import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, Switch} from 'react-router-dom';
import { getAllSpotsThunk } from '../../store/spots';

import SpotDetail from './SpotDetail';
import AddSpotForm from './AddSpotForm';

const AllSpots = () => {
    const dispatch = useDispatch();

    // const { spotId } = useParams();

    const spots = useSelector(state => {
        console.log('USESELECTOR LISTENING TO STATE', state)
        if (!state.spots.spotsArr) return null;
        return state.spots.spotsArr.map((spotObj) => spotObj);
    });

    useEffect(() => {

        dispatch(getAllSpotsThunk());
    }, [dispatch]);

    if (!spots) {
        return null;
    }

    return (
        <main>
            <div>
                {spots.map((spot) => {
                    return (
                        <NavLink key={spot.name} to={`/spots/${spot.id}`}>
                            <div>{spot.name}</div>
                        </NavLink>
                    );
                })}
                {/* <Link to="/spots"> */}

                <AddSpotForm />
                {/* </Link> */}
            <Switch>
                <Route path="/spots/:spotId">
                    <SpotDetail />
                </Route>
                <Route path="/spots">
                    <AddSpotForm />
                </Route>
            </Switch>
            </div>
        </main>
    );
};

export default AllSpots;
