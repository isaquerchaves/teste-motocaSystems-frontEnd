import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src="/Vector.png" alt="home" className="home" />
      <div className="avatar-container">
        <img src="/Avatar.png" alt="avatar" className="avatar" />
        <span className="status-online"></span>
      </div>
    </header>
  );
};

export default Header;
