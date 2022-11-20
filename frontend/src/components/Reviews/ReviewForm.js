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
                    className="input top"
                    type='text'
                    value={review}
                    required
                    onChange={updateReview} />
            </label>
            <label>
                <input
                    placeholder='stars'
                    className="input bottom"
                    type='number'
                    min={1}
                    max={5}
                    value={stars}
                    required
                    onChange={updateStars} />
            </label>
            <button className='submitForm' type="submit">
                <span className="submit">Submit</span>
            </button>
            <button className="cancelForm" type='button' onClick={(e) => {
                // if (formType === 'Add Spot') setHidden(true);
                // if (formType === 'Add Spot') setShowModal(false);
                handleCancelClick(e);
            }}>
                Cancel
            </button>
        </form>
    );
};

export default ReviewForm;
