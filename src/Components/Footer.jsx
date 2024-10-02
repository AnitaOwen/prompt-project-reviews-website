
import '../footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Contact Us</h4>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;