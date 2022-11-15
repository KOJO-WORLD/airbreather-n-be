import SpotForm from './SpotForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditSpotForm = () => {

  const { spotId } = useParams()
  const spot = useSelector(state => {
    return state.spots[spotId]
  }
  );

  const editSpot = {
    name: spot.name,
    address: spot.address,
    city: spot.city,
    state: spot.state,
    country: spot.country,
    latitude: spot.lat,
    longitude: spot.lng,
    description: spot.description,
    price: spot.price,
  };

  return (
    <SpotForm spot={editSpot} formType="Edit Spot" />
  );
}

export default EditSpotForm;
