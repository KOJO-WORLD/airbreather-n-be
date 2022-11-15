import SpotForm from './SpotForm';

const AddSpotForm = (hiddenState) => {
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
    <SpotForm spot={spot} formType="Add Spot" hiddenState={hiddenState} />
  );
}

export default AddSpotForm;
