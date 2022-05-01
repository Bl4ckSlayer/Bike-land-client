import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        className=" bg-primary mb-4"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="me-4 navLink" to="/">
                Home
              </CustomLink>
              <CustomLink className="me-4 navLink" to="/myitems">
                My Items
              </CustomLink>
              {/* {
                            user && <>
                            <CustomLink className="me-4 navLink" to="/manageInventory">Manage Inventory</CustomLink>
                            <CustomLink className="me-4 navLink" to="/addInventory">Add Inventory</CustomLink>
                            </>
                        }
                        <CustomLink className="me-4 navLink" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="me-4 navLink" to="/about">About</CustomLink>
                        {
                            !user ? <>
                                <CustomLink className="me-4 navLink" to="/signup">Sign Up</CustomLink>
                                <CustomLink className="me-4 navLink" to="/login">Login</CustomLink></>
                                :
                                <>
                                    <span className='navLink border-0 fw-bold user-name me-4' style={{color: "white"}}>{user?.displayName}</span>
                                    <button className="navLink border-0 bg-transparent text-start p-0" onClick={userSignOut}>Sign Out</button></>
                        } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;