import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addSpotThunk, editSpotThunk } from '../../store/spots';

const SpotForm = ({ spot, formType }) => {

    const { spotId } = useParams();

    console.log('JUST CHECING THIS ID', spotId)

    const dispatch = useDispatch();

    const history = useHistory();

    const [name, setName] = useState(spot.name);
    const [address, setAdress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [latitude, setLatitude] = useState(spot.latitude);
    const [longitude, setLongitude] = useState(spot.longitude);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);

    const updateName = (e) => setName(e.target.value);
    const updateAddress = (e) => setAdress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateLatitude = (e) => setLatitude(e.target.value);
    const updateLongitude = (e) => setLongitude(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            address,
            city,
            state,
            country,
            latitude,
            longitude,
            description,
            price
        };

        // dispatch(addSpotThunk(payload))
        formType === "Add Spot" ? dispatch(addSpotThunk(payload)) : dispatch(editSpotThunk(payload, spotId))

        history.push(`/`);
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                name
                <input
                    type='text'
                    value={name}
                    onChange={updateName} />
            </label>
            <label>
                address
                <input
                    type='text'
                    value={address}
                    onChange={updateAddress} />
            </label>
            <label>
                city
                <input
                    type='text'
                    value={city}
                    onChange={updateCity} />
            </label>
            <label>
                state
                <input
                    type='text'
                    value={state}
                    onChange={updateState} />
            </label>
            <label>
                country
                <input
                    type='text'
                    value={country}
                    onChange={updateCountry} />
            </label>
            <label>
                latitude
                <input
                    type='number'
                    value={latitude}
                    onChange={updateLatitude} />
            </label>
            <label>
                longitude
                <input
                    type='number'
                    value={longitude}
                    onChange={updateLongitude} />
            </label>
            <label>
                description
                <input
                    type='text'
                    value={description}
                    onChange={updateDescription} />
            </label>
            <label>
                price
                <input
                    type='number'
                    value={price}
                    onChange={updatePrice} />
            </label>
            <button type="submit">Save   |</button>
            <button type="button" onClick={handleCancelClick}> | Cancel</button>
        </form>
    );
};

export default SpotForm;
