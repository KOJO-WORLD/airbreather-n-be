import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { writeReviewThunk } from '../../store/reviews';
import '../button.css';
import '../input.css';
import '../Errors/Errors.css'

const ReviewForm = ({ writeReview, hidden, spotId }) => {

    const [hidden2, setHidden2] = spotId.hidden;

    const dispatch = useDispatch();

    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);


    const [review, setReview] = useState(writeReview.review);
    const [stars, setStars] = useState(writeReview.stars);

    const updateReview = (e) => setReview(e.target.value);
    const updateStars = (e) => setStars(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            spotId: spotId.spotId,
            review,
            stars,
            userId: sessionUser.id
        };

        dispatch(writeReviewThunk(payload));
        setHidden2(true);
        history.push(`/spots/${spotId.spotId}`);
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setHidden2(true);

        setReview('');
        setStars(0);
        history.push(`/spots/${spotId.spotId}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    placeholder='review'
                    className="input"
                    type='text'
                    value={review}
                    required
                    onChange={updateReview} />
            </label>
            <label>
                <input
                    placeholder='stars'
                    className="input"
                    type='number'
                    min={1}
                    max={5}
                    value={stars}
                    required
                    onChange={updateStars} />
            </label>
            <button className='submit' type="submit">

                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Save</span>
            </button>
            <button className="cancel" type='button' onClick={(e) => {
                // if (formType === 'Add Spot') setHidden(true);
                // if (formType === 'Add Spot') setShowModal(false);
                handleCancelClick(e);
            }}><span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Cancel</span></button>
        </form>
    );
};

export default ReviewForm;
