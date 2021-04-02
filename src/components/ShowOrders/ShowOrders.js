import React from 'react';
import { Container } from 'react-bootstrap';

const ShowOrders = ({book}) => {
    return (
        <tbody>
            <tr>
                <td>{book.bookName}</td>
                <td className=" text-center">{book.authorName}</td>
                <td className=" text-center">{book.price}</td>
                <td className=" text-center">{(new Date(book.date).toDateString('dd/MM/yyyy'))}</td>
                <td className=" text-center">{(new Date(book.date).toLocaleTimeString('en-US'))}</td>
            </tr>
        </tbody>
        // <Container>
        //     <li>{book.bookName} {book.authorName} {book.price} {(new Date(book.date).toDateString('dd/MM/yyyy'))} {(new Date(book.date).toLocaleTimeString('en-US'))}</li>
        // </Container>
    );
};

export default ShowOrders;