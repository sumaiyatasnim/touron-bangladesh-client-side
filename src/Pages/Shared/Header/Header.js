import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';


const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <img className="img-fluid logo" src="" alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>


                        {user?.email ?
                            <Nav.Link as={Link} to="/orderPlace">Tour Booking</Nav.Link>
                            :
                            <div></div>}
                        {user?.email ?
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                            :
                            <div></div>}
                        {/* {user?.email ?
                            <Nav.Link as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
                            :
                            <div></div>} */}

                        <Nav.Link as={HashLink} to="/addServices">Add Service</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="info">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className="text-dark">
                            Signed in as: <Link to="/login" className="text-decoration-none text-success fw-bold">{user?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;