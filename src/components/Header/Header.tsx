import "./Header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="/Vector.png" alt="home" className="home" />
      </a>
        <div className="avatar-container">
        <img src="/Avatar.png" alt="avatar" className="avatar" />
        <span className="status-online"></span>
      </div>
    </header>
  );
};

export default Header;
