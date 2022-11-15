import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addSpotThunk, editSpotThunk } from '../../../store/spots';
import '../../button.css';
import '../../input.css';
import '../../Errors/Errors.css'

const SpotForm = ({ spot, formType, modal }) => {

    // console.log(modal, '<- AYE EE MODAL n FoRM TYPE : ', formType)

    // if (formType === 'Add Spot') {
    //     var [hidden, setHidden] = hiddenState.hiddenState
    // }
    // if (formType === "Edit Spot") var [showModal, setShowModal] = modal;
    // else
    if (formType === 'Add Spot') var [showModal, setShowModal] = modal.modal
    // console.log('WHAT IT DUE', formType, showModal, setShowModal);

    const { spotId } = useParams();

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
            price,
            previewImage: spotId
        };

        if (formType === "Add Spot") {
            dispatch(addSpotThunk(payload));
            // setHidden(true);
            setShowModal(false);
            history.push(`/`);
        } else
            dispatch(editSpotThunk(payload, spotId));
        history.push(`/`);
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    placeholder='name'
                    className="input"
                    type='text'
                    value={name}
                    onChange={updateName} />
            </label>
            <label>
                <input
                    placeholder='address'
                    className="input"
                    type='text'
                    value={address}
                    onChange={updateAddress} />
            </label>
            <label>
                <input
                    className="input"
                    placeholder='city'
                    type='text'
                    value={city}
                    onChange={updateCity} />
            </label>
            <label>
                <input
                    placeholder='state'
                    className="input"
                    type='text'
                    value={state}
                    onChange={updateState} />
            </label>
            <label>
                <input
                    placeholder='country'
                    className="input"
                    type='text'
                    value={country}
                    onChange={updateCountry} />
            </label>
            <label>
                latitude
                <input
                    placeholder='latitude'
                    className="input"
                    type='number'
                    value={latitude}
                    onChange={updateLatitude} />
            </label>
            <label>
                longitude
                <input
                    placeholder='longitude'
                    className="input"
                    type='number'
                    value={longitude}
                    onChange={updateLongitude} />
            </label>
            <label>
                <input
                    placeholder='description'
                    className="input"
                    type='text'
                    value={description}
                    onChange={updateDescription} />
            </label>
            <label>
                price
                <input
                    placeholder='price'
                    className="input"
                    type='number'
                    value={price}
                    onChange={updatePrice} />
            </label>
            <button className='submit' type="submit">

                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Save</span>

            </button>
            <button className="cancel" type='button' onClick={(e) => {
                // if (formType === 'Add Spot') setHidden(true);
                if (formType === 'Add Spot') setShowModal(false);
                handleCancelClick(e);
            }}><span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Cancel</span></button>
        </form>
    );
};

export default SpotForm;
