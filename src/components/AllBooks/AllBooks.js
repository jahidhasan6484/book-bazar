import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllBooks = (props) => {
    const { imageURL, name, authorName, _id, price } = props.book;

    return (
        <div className="col-md-3 my-3">
            <Card>
                <Card.Img style={{ height: '300px', objectFit: 'cover' }} variant="top" src={imageURL} />
                <Card.Body>
                    <div className="text-left">
                        <Card.Title>{name}</Card.Title>
                        <p>{authorName}</p>
                        <h6>TK.{price} <Link to={`/checkout/${_id}`}><Button className="btn-success">Book Now</Button></Link></h6>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllBooks;