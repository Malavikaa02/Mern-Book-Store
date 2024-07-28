import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Romantasy",
    "Horror",
    "Young Adult Fiction",
    "History & Biography",
    "Fantasy",
    "Mystery & Thriller",
    "Self-help",
    "Memoir",
    "Bussiness",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleBoookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value
    
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    console.log(bookObj)

    // send data to database

    fetch("https://mern-book-store-6ym5.onrender.com/upload-book", {
      method: "Post", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data)
      alert("Book Uploaded Successfully !!")
      form.reset();
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBoookSubmit} className="flex flex-col gap-4 w-full">
      {/* First row */}
      <div className='flex gap-8 w-full'>
        <div className='flex-1'>
          <div className="mb-3 block">
            <Label htmlFor="bookTitle" value="Book Title " />
          </div>
          <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book name" required className="w-[400px]" />
        </div>
        <div className='flex-1'>
          <div className="mb-3 block">
            <Label htmlFor="authorName" value="Author Name " />
          </div>
          <TextInput id="authorName" type="text" name='authorName' placeholder="Author name" required className="w-[400px]" />
        </div>
      </div>

      {/* Second row */}
      <div className='flex gap-8 w-full'>
        <div className='flex-1'>
          <div className="mb-3 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book image URL" required className="w-[400px]" />
        </div>

        <div className='flex-1'>
          <div className="mb-3 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>

          <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
          onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }

          </select>

        </div>
          
      </div>

      {/* Third row */}
      <div className='w-full'>
        <div className="mb-3 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <textarea
          id="bookDescription"
          name='bookDescription'
          placeholder="Write your book description.."
          required
          className="w-full h-[150px] p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* book pdf link */}
      <div className='flex gap-8 w-full'>
        <div className='flex-1'>
          <div className="mb-3 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL " />
          </div>
          <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder="Book PDF URL" required className="w-[400px]" />
        </div>
      </div>

      <Button type="submit" className="bg-blue-500 text-white flex justify-center items-center">
          Upload Book
      </Button>

    </form>
    </div>
  );
}

export default UploadBook;
