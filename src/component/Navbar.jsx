import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/number">Number</Link></li>
        <li><Link to="/string">String</Link></li>
        <li><Link to="/ternary">Ternary Operator</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
