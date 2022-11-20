import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllSpotsThunk } from '../../store/spots';
// import { writeReviewThunk } from '../../store/reviews';

import "./Spots.css"

// import SpotDetail from './SpotDetail';
// import AddSpotForm from './AddSpotForm';

const AllSpots = () => {
    const dispatch = useDispatch();
    // const [hidden, setHidden] = useState(true);

    // const { spotId } = useParams();

    const spots = useSelector(state => {
        if (!state.spots.spotsArr) return null;
        return state.spots.spotsArr.map((spotObj) => spotObj);
    });
    const reviews = useSelector(state => state.reviews.spotReviewsArr);

    useEffect(() => {
        dispatch(getAllSpotsThunk());
    }, [dispatch, reviews]);

    if (!spots) {
        return null;
    }

    return (
        <main clasname="main">
            <div>
                <div className='spotsContainer'>
                    {spots.map((spot) => {
                        return (
                            <NavLink key={spot.id} to={`/spots/${spot.id}`} className="spotLink">
                                <div className='spotParent'>
                                    <img className='prevImg' src={spot?.previewImage} alt='preview'></img>
                                    <div className='textContainer'>
                                        <ul className="spotDetailsList">
                                            <li>
                                                <div>
                                                    <div className="spotText left">
                                                        {spot.city}, {spot.state}
                                                    </div>
                                                    <div className="spotText right">
                                                        <i class="fa-solid fa-star"></i>
                                                        {spot.avgRating}
                                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="junkText">
                                                    Added 11 weeks ago
                                                </div>
                                            </li>
                                            <li>
                                                <div className="junkText"> mar 28 - apr 2</div>
                                            </li>
                                            <li>
                                                <div className="spotText price">
                                                    ${spot.price} night
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default AllSpots;
