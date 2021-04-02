import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBook = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            authorName: data.authorName,
            price: data.price,
            imageURL: imageURL
        };

        const url = `https://arcane-forest-00339.herokuapp.com/addBook`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("server response korse", res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '3095b87c8ab0955b7f17e8f20b8763d0');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                const avatar = response.data.data.display_url;
                setImageURL(avatar);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
            <div className="row mt-5" style={{justifyContent: 'center'}}>
                <div className="col-md-6 addForm">
                    <h3>Add Book</h3>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6>Book Name</h6>
                        <input name="name" placeholder="Enter Name" ref={register} className="form-control" required />
                        <br />
                        <h6>Author Name</h6>
                        <input name="authorName" placeholder="Enter Name" ref={register} className="form-control" required />
                        <br />
                        <h6>Add Price</h6>
                        <input name="price" placeholder="Enter Price" ref={register} className="form-control" required />
                        <br />
                        <h6>Add Book Cover Photo</h6>
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} className="form-control" required />
                        <br /> <br />
                        <input type="submit" value="Save" className="form-control" />
                    </form>
                </div>
            </div>
    );
};

export default AddBook;