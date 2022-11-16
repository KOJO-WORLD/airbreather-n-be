import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { getAllSpotsThunk } from '../../store/spots';
import "./Spots.css"

import SpotDetail from './SpotDetail';
import AddSpotForm from './AddSpotForm';

const AllSpots = () => {
    const dispatch = useDispatch();
    // const [hidden, setHidden] = useState(true);

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

    return (
        <main clasname="main">
            <div>
                <Switch>
                    <Route path="/spots/:spotId">
                        <SpotDetail />
                    </Route>
                    <Route path="/spots">
                        <AddSpotForm />
                    </Route>
                </Switch>
                <div className='spotsContainer'>
                    {spots.map((spot) => {
                        return (
                            <NavLink key={spot.id} to={`/spots/${spot.id}`}>
                                <div className='spotParent'>
                                    <img className='prevImg' src={spot?.previewImage} alt='preview'></img>
                                    <div>{spot.name}</div>
                                    <p>{spot.avgRating}</p>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
                {/* <NavLink to='/spots'> */}
                {/* </NavLink> */}
            </div>
        </main>
    );
};

export default AllSpots;
