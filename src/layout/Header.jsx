import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/img/Cookie-Munch-MANUAL-08 (1).png";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import "../css/Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img width={70} src={logo}></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className={(navData) => (navData.isActive ? "active nav-link mx-3" : 'nav-link mx-3')} to="/">
              Home
            </NavLink>

            <NavLink className={(navData) => (navData.isActive ? "active nav-link mx-3" : 'nav-link mx-3')} to="/blogs">
              Blogs
            </NavLink>
          </Nav>
         <NavLink to='/login' className="login">< VscAccount />
         </NavLink>
          <Link to="/dashboard" className="btn-dash">
          Dashboard
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;