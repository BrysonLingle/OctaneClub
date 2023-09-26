import { Link } from "react-router-dom";

// Corrected component level style import
import './Header.css';

const headerImage =
  "https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/35193476_1507801255992408_5010765914191167488_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=O6gFWRVZpNYAX_NhoRl&_nc_ht=scontent-lax3-1.xx&oh=00_AfDbbMUSJprXekfITH27qOhnwRpYjWu7QAOU1l4ZNGY0pA&oe=65393F09";
const brandImage =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

const Nav = () => (
  <nav className="Nav">
    <Link to="/">
      <img src={brandImage} alt="Brand" /> {/* Added alt attribute */}
    </Link>
    <div>Cars App</div>
  </nav>
);

const Header = ({ heroImage }) => {
  return (
    <header style={{ height: "360px", overflow: "hidden" }}>
      <Nav />
      <img style={{ width: "100%" }} src={heroImage || headerImage} alt="Header" /> {/* Added alt attribute */}
    </header>
  );
};

export default Header;
