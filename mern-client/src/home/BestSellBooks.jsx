import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const[books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://mern-book-store-6ym5.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,

        8)))
    }, [])
  return (
    <div>
        <BookCards books={books} headLine="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks;