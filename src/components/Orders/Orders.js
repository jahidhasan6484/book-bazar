import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowOrders from '../ShowOrders/ShowOrders';

const Orders = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://arcane-forest-00339.herokuapp.com/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    return (
        <div className="container mt-5">
                <div className="text-center">
                    <h2 className="text-success">Thanks!</h2>
                    <h5 className="text-success">Order of Book is successful</h5>
                </div>
                <div className="mt-5">
                    <p>Your order history: {bookings.length} orders</p>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col" className=" text-center">Author Name</th>
                            <th scope="col" className=" text-center">Price</th>
                            <th scope="col" className=" text-center">Date</th>
                            <th scope="col" className=" text-center">Time</th>
                        </tr>
                    </thead>
                    {
                        bookings.map(book => <ShowOrders book={book}></ShowOrders>)
                    }
                </table>
        </div>
    );
};

export default Orders;