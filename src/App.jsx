import { useState } from 'react';
import Reviews from './Components/Reviews';
import Header from './Components/Header';
import ReviewForm from './Components/ReviewForm';
import Modal from './Components/Modal'; // Import the Modal component
import Footer from './Components/Footer'; // Import the Footer component

const App = () => {
  // Initialize reviews with mock data
  const initialReviews = [
    { title: "Great Product", date: "2023-10-01", summary: "I loved using this product!", reviewerName: "Alice" },
    { title: "Not what I expected", date: "2023-9-30", summary: "The product did not meet my expectations.", reviewerName: "Bob" },
    { title: "Excellent Service", date: "2023-9-29", summary: "Customer service was outstanding!", reviewerName: "Charlie" },
    { title: "Value for Money", date: "2023-9-28", summary: "This product offers great value for the price.", reviewerName: "Diana" },
    { title: "Will Buy Again", date: "2023-9-25", summary: "I will definitely purchase this again!", reviewerName: "Ethan" },
  ];

  const [reviews, setReviews] = useState(initialReviews); // Initialize with mock data
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleReviewSubmit = (newReview) => {
    // Add the new review and sort by date
    setReviews((prevReviews) => {
      const updatedReviews = [newReview, ...prevReviews]; // Add the new review to the beginning
      return updatedReviews.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (most recent first)
    });
    setIsModalOpen(false); // Close the modal after submission
  };

  const openModal = () => {
    setIsModalOpen(true); // Function to open the modal
  };

  return (
    <div>
      <Header onOpenModal={openModal} /> {/* Pass the function to Header */}
      <Reviews reviews={reviews} /> {/* Use the reviews state */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ReviewForm onSubmit={handleReviewSubmit} />
      </Modal>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default App;