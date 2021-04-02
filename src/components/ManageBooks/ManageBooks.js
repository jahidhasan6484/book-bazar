import { Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const ManageBooks = () => {
    const [manageBooks, setManageBooks] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/books'
        fetch(url)
            .then(res => res.json())
            .then(data => setManageBooks(data))
    }, [manageBooks])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const remainBooks = manageBooks.filter(book => book._id !== id);
                    setManageBooks(remainBooks);
                }
            })
    }

    return (
        <Container>
            <div className="container mt-5">
                <div className="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col" className=" text-center">Author Name</th>
                                <th scope="col" className=" text-center">Price</th>
                                <th scope="col" className=" text-center">Action</th>
                            </tr>
                        </thead>
                        {
                            manageBooks.map(book => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{book.name}</td>
                                            <td className=" text-center">{book.authorName}</td>
                                            <td className=" text-center">{book.price}</td>
                                            <td className=" text-center"><Button onClick={() => handleDelete(book._id)} className="btn-success">Delete</Button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </Container>
    );
};

export default ManageBooks;