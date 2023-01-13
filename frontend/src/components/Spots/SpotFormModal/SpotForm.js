import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addSpotThunk, editSpotThunk } from '../../../store/spots';
import '../../button.css';
import '../../input.css';
import '../../Errors/Errors.css';
import '../Spots.css';
import './spotModal.css'

const SpotForm = ({ spot, formType, modal }) => {

    if (formType === 'Add Spot') var [showModal, setShowModal] = modal.modal

    const { spotId } = useParams();

    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const history = useHistory();

    const [name, setName] = useState(spot.name);
    const [address, setAdress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    // const [lat, setLatitude] = useState(spot.latitude);
    // const [lng, setLongitude] = useState(spot.longitude);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const [previewImage, setPreviewImage] = useState(spot.previewImage);

    const updateName = (e) => setName(e.target.value);
    const updateAddress = (e) => setAdress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    // const updateLatitude = (e) => setLatitude(e.target.value);
    // const updateLongitude = (e) => setLongitude(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updatePreviewImage = (e) => setPreviewImage(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            address,
            city,
            state,
            country,
            lat: 1,
            lng: 1,
            description,
            price,
            previewImage: previewImage,
            // avgRating: spot.avgRating,
            ownerId: sessionUser.id
        };

        // console.log('payload', payload)

        if (formType === "Add Spot") {
            dispatch(addSpotThunk(payload));
            // setHidden(true);
            setShowModal(false);
            history.push(`/`);
        } else {
            dispatch(editSpotThunk(payload, spotId));
            history.push(`/spots/${spotId}`);
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        formType === 'Edit Spot' && history.push(`/spots/${spotId}`);
    };

    return (
        <form onSubmit={handleSubmit} className='spotForm'>
            <div className='container addSpot'>

                <label>
                    <input
                        required
                        placeholder='name'
                        className="input top"
                        type='text'
                        value={name}
                        maxLength={50}
                        onChange={updateName} />
                </label>
                <label>
                    <input
                        required
                        placeholder='address'
                        className="input"
                        type='text'
                        value={address}
                        onChange={updateAddress} />
                </label>
                <label>
                    <input
                        required
                        className="input"
                        placeholder='city'
                        type='text'
                        value={city}
                        onChange={updateCity} />
                </label>
                <label>
                    <input
                        required
                        placeholder='state'
                        className="input"
                        type='text'
                        value={state}
                        onChange={updateState} />
                </label>
                <label>
                    <input
                        required
                        placeholder='country'
                        className="input"
                        type='text'
                        value={country}
                        onChange={updateCountry} />
                </label>
                {/* <label className='spotText'>
                    <input
                        required
                        placeholder='latitude'
                        className="input"
                        type='number'
                        value={lat}
                        onChange={updateLatitude} />
                </label>
                <label className='spotText'>
                    <input
                        required
                        placeholder='longitude'
                        className="input"
                        type='number'
                        value={lng}
                        onChange={updateLongitude} />
                </label> */}
                <label>
                    <input
                        required
                        placeholder='description'
                        className="input"
                        type='text'
                        value={description}
                        onChange={updateDescription} />
                </label>
                <label className='spotText'>
                    <input
                        required
                        placeholder='price'
                        className="input"
                        type='number'
                        min={0}
                        value={price}
                        onChange={updatePrice} />
                </label>
                <label className='spotText'>
                    <input
                        required
                        placeholder=' Preview image URL'
                        className="input bottom"
                        type='URL'
                        value={previewImage}
                        onChange={updatePreviewImage} />
                </label>
                <button className='submitForm' type="submit">
                    <span>Save</span>
                </button>
                <button className="cancelForm" type='button' onClick={(e) => {
                    // if (formType === 'Add Spot') setHidden(true);
                    if (formType === 'Add Spot') setShowModal(false);
                    handleCancelClick(e);
                }}>
                    <span>Cancel</span>
                </button>
            </div>
        </form>
    );
};

export default SpotForm;
