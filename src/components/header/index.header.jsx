import "./index.header.css";
import logo from "../../assets/imgs/profile/logo.jpeg";

import { Nav, Navbar } from "react-bootstrap";

export const HeaderComponents = () => {
  return (
    <>
      <header class="header-menu">
        <div>
          <figure>
            <img id="logo" src={logo} alt="Logo Taste Tingeries" />
          </figure>
        </div>

        <Navbar class="navbar">
          <Nav class="nav justify-content-end">
            <Nav.Link class="nav-link" aria-current="page" href="#lingeries">
              Lingeries
            </Nav.Link>
            <Nav.Link class="nav-link" href="#">
              SexShop
            </Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </>
  );
};
