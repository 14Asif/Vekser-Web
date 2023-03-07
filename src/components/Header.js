import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';
function Header() {
  return (
    <Navbar
      className="navbar-light navbg fixed-top scrolling-navbar"
      expand="md"
    >
      <Container>
        <Link href="/" passHref className="navbar-brand">
          <img
            src="./images/Vekser-logo.png"
            className="img-fuild logo-size"
            alt="vekser-logo"
            width={""}
          />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* <Link href="/" passHref className="nav-link navtext">
              Home
            </Link> */}
            <Link href="/about" passHref className="nav-link navtext">
              About
            </Link>
            <Link href="/portfolio" passHref className="nav-link navtext">
              Portfolio
            </Link>
            <Link href="/invest" passHref className="nav-link navtext">
              Invest
            </Link>
            <Link href="/career" passHref className="nav-link navtext">
              Career
            </Link>
            <Link href="/media" passHref className="nav-link navtext">
              Media
            </Link>
            <Link href="/contact" passHref className="nav-link navtext">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
