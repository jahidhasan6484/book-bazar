import { Container, Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to="/">BOOK<span className="text-success logo">BAZAR</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} className="nav" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="nav" to="/orders">Orders</Nav.Link>
                        <Nav.Link as={Link} className="nav" to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} className="nav" to="/checkout">Checkout</Nav.Link>
                        {
                            loggedInUser.email ?
                                <Nav.Link as={Link} className="nav" to="/profile"><img className="userAvatar" src={loggedInUser.photo} alt="" /></Nav.Link>
                                :
                                <Link to="/Login" className="nav"><Button className="btn-success">Login</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;