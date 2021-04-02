import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [book, setBook] = useState([])

    const { id } = useParams();
    useEffect(() => {
        fetch('https://arcane-forest-00339.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])

    const selectedBook = book.find(book => book?._id === id);

    console.log(selectedBook?.name);

    const handleCheckout = () => {
        const newBooking = { ...loggedInUser, bookName: selectedBook?.name, authorName: selectedBook?.authorName, price: selectedBook?.price, date: new Date() }
        fetch('https://arcane-forest-00339.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
    }

    return (
        <Container>
            <div className="mt-5">
                <h3>Checkout</h3>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <p>Description</p>
                        <h5>{selectedBook?.name}</h5>
                    </div>
                    <div className="col-md-3">
                        <p className="text-center">Quantity</p>
                        <h5 className="text-center">1</h5>
                    </div>
                    <div className="col-md-3">
                        <p className="text-center">Price</p>
                        <h5 className="text-center">TK.{selectedBook?.price}</h5>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-right">
                <Link to="/order"><Button onClick={() => handleCheckout()} className="btn-success">Checkout</Button></Link>
            </div>
            <div className="mt-5" style={{ textAlign: 'center' }}>
                <p>Want a <Link to="/home" className="text-success">different book?</Link> </p>
            </div>
        </Container>
    );
};

export default CheckOut;