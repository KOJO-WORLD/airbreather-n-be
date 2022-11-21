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
                                        <div className="spotDetailsList">
                                            <div>
                                                <div className="spotText">
                                                    {spot.city}, {spot.state}
                                                </div>
                                                {spot.avgRating &&
                                                <div className="spotText right">
                                                    <i className="fa-solid fa-star"></i>
                                                    {spot.avgRating}
                                                </div>
                                                }
                                            </div>
                                            <div className="junkText">
                                                Added 11 weeks ago
                                            </div>
                                            <div className="junkText"> mar 28 - apr 2</div>
                                            <div className="spotText price">
                                                <span style={{fontSize: "17px"}}>${spot.price}</span> night
                                            </div>
                                        </div>
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
