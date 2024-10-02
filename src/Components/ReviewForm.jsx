import React, { useState } from 'react';
import '../reviewForm.css'; // Import the CSS for styling

const ReviewForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [summary, setSummary] = useState(''); // Change content to summary

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString(); // Get the current date
    onSubmit({ title, reviewerName, summary, date }); // Pass the review data to the parent
    setTitle(''); // Clear the input fields
    setReviewerName('');
    setSummary(''); // Clear the summary field
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Review Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="reviewerName">Your Name:</label>
        <input
          type="text"
          id="reviewerName"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Review Content:</label>
        <textarea
          id="content"
          value={summary} // Change content to summary
          onChange={(e) => setSummary(e.target.value)} // Change content to summary
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit Review</button>
    </form>
  );
};

export default ReviewForm;