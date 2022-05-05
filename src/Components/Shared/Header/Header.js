import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../../Images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const userSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        className=" bg-nav mb-4 fw-bolder "
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={50} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="me-4 navLink" to="/">
                Home
              </CustomLink>
              <CustomLink className="me-4 navLink" to="/myproducts">
                My Products
              </CustomLink>
              {user && (
                <>
                  <CustomLink className="me-4 navLink" to="/manageInventory">
                    Manage Inventory
                  </CustomLink>
                  <CustomLink className="me-4 navLink" to="/addInventory">
                    Add Inventory
                  </CustomLink>
                </>
              )}
              <CustomLink className="me-4 navLink" to="/blogs">
                Blogs
              </CustomLink>
              <CustomLink className="me-4 navLink" to="/about">
                About
              </CustomLink>
              {!user ? (
                <>
                  <CustomLink className="me-4 navLink" to="/signup">
                    Sign Up
                  </CustomLink>
                  <CustomLink className="me-4 navLink" to="/login">
                    Login
                  </CustomLink>
                </>
              ) : (
                <>
                  <span
                    className="navLink border-0 fw-bold user-name me-4"
                    style={{ color: "white" }}
                  >
                    {user?.displayName}
                  </span>
                  <button
                    className="navLink border-0 bg-transparent text-start p-0 fw-bolder"
                    onClick={userSignOut}
                  >
                    Sign Out
                  </button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
