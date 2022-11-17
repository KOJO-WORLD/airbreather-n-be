import SpotForm from './SpotFormModal/SpotForm';
// import { useSelector } from 'react-redux';

const AddSpotForm = (modal) => {
  const spot = {
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    latitude: null,
    longitude: null,
    description: '',
    price: null,
    previewImage: ''
  };

  return (
    <SpotForm spot={spot} formType="Add Spot" modal={modal} />
  );
}

export default AddSpotForm;
