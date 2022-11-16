import { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpotForm from './EditSpotForm';
import { deleteSpotThunk, getSpotDetailThunk } from '../../store/spots';
import EditSpotForm from './EditSpotForm';
import GetSpotReviews from '../Reviews/GetSpotReviews';
import WriteReviewForm from '../Reviews/WriteReviewForm';

const SpotDetail = () => {

    const history = useHistory();

    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);

    const { spotId } = useParams();

    const spot = useSelector(state => state.spots[spotId]);
    //   const [editSpotForm, setEditSpotForm] = useState(false);

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);


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
        // (sessionUser) &&
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
            {
                ((sessionUser) &&
                (spot.ownerId === sessionUser.id)) && (
                    <div>
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
                    </div>
                )
            }
            {
                ((sessionUser) &&
                (spot.ownerId !== sessionUser.id)) && (
                    <>
                        <button style={{ visibility: hidden2 ? 'visible' : 'hidden' }} onClick={() => { setHidden2(false) }}>Leave a review</button>
                        <div style={{ visibility: hidden2 ? 'hidden' : 'visible' }}>
                            {/* <Route path='/reviews/new'> */}
                            <WriteReviewForm spotId={spotId} hidden={[hidden2, setHidden2]} />
                            {/* </Route> */}

                        </div>
                    </>
                )
            }
            {/* <Route path={`/spots/${spotId}/edit`}>
                <EditSpotForm />
            </Route> */}
        </div >
    );
};

export default SpotDetail;
