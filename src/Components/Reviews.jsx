import "../reviews.css"

const Reviews = ({ reviews }) => {
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Format options
      return new Date(dateString).toLocaleDateString(undefined, options); // Format the date
    };
  
    return (
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h2 className="review-title">{review.title}</h2>
            <p className="review-date">{formatDate(review.date)}</p> {/* Use formatted date */}
            <p className="review-summary">{review.summary}</p>
            <p className="reviewer-name">- {review.reviewerName}</p> {/* Display the reviewer's name in the desired format */}
          </div>
        ))}
      </div>
    );
  }

export default Reviews;