import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Profile.css';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogOut = () => {
        setLoggedInUser("");
    }

    return (
        <Container>
            <div className="row mt-5">
                <div className="col-md-8 mt-5 text-center">
                    <h2>Keep In Touch</h2>
                    <h2>with</h2>
                    <p>BOOK<span className="text-success" style={{ fontWeight: '600' }}>BAZAR</span></p>
                </div>
                <div className="col-md-4 text-center logout">
                    <h4>My Profile</h4>
                    <div className="card-body">
                        <img src={loggedInUser.photo} style={{ width: '100', borderRadius: '50%' }} alt="Profile Pic" />
                        <br />
                        <h5 className="card-title">{loggedInUser.email}</h5>
                        <hp className="card-text">{loggedInUser.email}</hp>
                        <br /><br /><br />
                        <Link to="/home"><Button onClick={handleLogOut} className="btn-success">Log Out</Button></Link>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Profile;