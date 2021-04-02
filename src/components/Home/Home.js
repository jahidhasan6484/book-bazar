import React, { useEffect, useState } from 'react';
import AllBooks from '../AllBooks/AllBooks';
import loadingGIF from '../../images/loading1.gif';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mt-5">
      <div className="row">
        { loading? <img src={loadingGIF} className="spinner"/> :
          books.map(book => <AllBooks book={book}></AllBooks>)
        }
      </div>
    </div>
  );
};

export default Home; <p>This is home</p>