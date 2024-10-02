import "../header.css";

const Header = ({ onOpenModal }) => {
  return (
    <header className="header">
      <h1 className="title">Reviews Website</h1>
      <nav className="nav">
        <ul>
          {/* <li><a href="#reviews">Reviews</a></li> */}
          <li><a href="#" onClick={onOpenModal}>Submit A Review</a></li> {/* Call the function to open modal */}
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;