import React from "react";
import {Button, Form, Nav, Navbar} from "react-bootstrap";
import {Link, navigate} from "@reach/router";

export function Header() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand onClick={() => navigate('/')}>Gallery</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link"> Home </Link>
                    <Link to="/pictures-upload" className="nav-link"> Upload Photos </Link>
                    <Link to="/pictures-buy" className="nav-link"> Buy Photos </Link>
                </Nav>
                <Form inline>
                    <Button variant="link" onClick={() => navigate("/my-cart") }>My Cart</Button>
                    <Button variant="link" onClick={() => navigate("/login") }>Login</Button>
                    <Button variant="link" onClick={() => navigate("/register") }>Register</Button>
                </Form>
            </Navbar>
        </div>
    )

}