import SpotForm from './SpotForm';

const EditSpotForm = () => {
  const spot = {
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    latitude: 0,
    longitude: 0,
    description: '',
    price: 0,
  };

  return (
    <SpotForm spot={spot} formType="Edit Spot" />
  );
}

export default EditSpotForm;
