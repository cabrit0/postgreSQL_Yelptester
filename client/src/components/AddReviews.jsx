import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";

const AddReviews = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  //console.log(navigate);

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      console.log(response.data.data);
      navigate(`/`);
      navigate(`/restaurants/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              id="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="custom-select form-control"
              id="rating"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="form-control"
            id="review"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmitReview(e)}
          className="btn btn-primary my-4"
        >
          Submit
        </button>
        <button onClick={handleBack} className="btn btn-danger mx-2 my-4">
          Back
        </button>
      </form>
    </div>
  );
};

export default AddReviews;
