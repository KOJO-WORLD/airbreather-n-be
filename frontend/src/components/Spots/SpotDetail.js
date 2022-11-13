import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpotForm from './EditSpotForm';
import { getSpotDetailThunk } from '../../store/spots';

const SpotDetail = () => {

    const { spotId } = useParams();
    const spot = useSelector(state => state.spots[spotId]);
    //   const [editSpotForm, setEditSpotForm] = useState(false);

    console.log('SPOT', spot)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getSpotDetailThunk(spotId))
    }, [dispatch, spotId]);

    if (!spot) {
        return null;
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





            {/* <div
          className="spot-image"
          style={{ backgroundImage: `url('${spot.imageUrl}')` }}
        ></div> */}
            <div>
                {/* <h1 className="bigger">{spot.name}</h1>
                {(!showEditPokeForm && pokemon.captured) && (
            <button onClick={() => setEditSpotForm(true)}>Edit</button>
          )} */}
            </div>
        </div >
    );
};

export default SpotDetail;
