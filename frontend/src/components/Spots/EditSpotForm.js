import SpotForm from './SpotFormModal/SpotForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditSpotForm = (modal) => {

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
    avgRating: spot.avgRating,
    previewImage: spot.previewImage
  };

  return (
    <SpotForm spot={editSpot} formType="Edit Spot" modal={modal} />
  );
}

export default EditSpotForm;
