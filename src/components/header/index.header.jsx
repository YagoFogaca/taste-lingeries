import "./index.header.css";
import logo from "../../assets/imgs/profile/logo.jpeg";

import { Nav, Navbar } from "react-bootstrap";

export const HeaderComponents = () => {
  return (
    <>
      <Navbar className="header-menu sticky-top">
        <div>
          <figure>
            <img id="logo" src={logo} alt="Logo Taste Tingeries" />
          </figure>
        </div>

        <Navbar className="navbar">
          <Nav className="nav justify-content-end">
            <Nav.Link className="nav-link" aria-current="page" href="#lingerie">
              Lingeries
            </Nav.Link>
            <Nav.Link className="nav-link" href="#sexshop">
              SexShop
            </Nav.Link>
          </Nav>
        </Navbar>
      </Navbar>
    </>
  );
};
