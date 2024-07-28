import React, { useEffect, useState } from 'react'

import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect( () => {
    fetch("https://mern-book-store-6ym5.onrender.com/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])

  //delete a books
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://mern-book-store-6ym5.onrender.com/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is Deleted Successfully!")
      //setAllBooks(data);
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      {/* table for book data*/}
      <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max divide-y divide-gray-300 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Number</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Book Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Author Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Category</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Prices</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              <span>Edit or Manage</span>
            </th>
          </tr>
        </thead>
        {
          allBooks.map((book, index) => <tbody className="bg-white divide-y divide-gray-300" key={book._id}>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {index+1}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {book.bookTitle}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {book.authorName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {book.category}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">$10.00</td>
              <td className="px-6 py-4 text-sm font-medium">
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-m hover:bg-sky-600'>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>)
        }
      </table>
    </div>

    </div>
  )
}

export default ManageBooks