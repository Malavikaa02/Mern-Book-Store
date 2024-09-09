# MERN Book Store
## Description
The MERN Book Store is a full-stack web application for managing a collection of books. Users can browse, search, add, edit, and delete books. The application uses the MERN stack: MongoDB for the database, Express.js for the backend framework, React.js for the frontend framework, and Node.js for the runtime environment.
## Features
+ User authentication (login and registration)
+ Browse books
+ Search books by title, author, or genre
+ Add new books
+ Edit book details
+ Delete books
+ Responsive design
## Technologies Used
+ **Frontend:** React.js, Redux, React Router, Bootstrap
+ **Backend:** Node.js, Express.js
+ **Database:** MongoDB, Mongoose
+ **Authentication:** JSON Web Tokens (JWT), bcrypt
+ **Other Tools:** Git, Heroku (for deployment)
## Installation
1. Clone the repository:
   ```sh
    https://github.com/Malavikaa02/Book-Store.git
    cd mern-book-store
2. Install dependencies:
   + For the backend:
     ```bash
     cd backend
     npm install
     ```

   + For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```
## Set up environment variables
Create a .env file in the backend directory and add the following variables:
## Run the application
   + Start the backend server:
      ```bash
      cd mern-server
      nodemon index.js
      ```
   + Start the frontend server:
      ```bash
      cd mern-client
      npm run dev
      ```
The application should now be running on http://localhost:5173 for the frontend and http://localhost:5000 for the backend.
## Usage
1. **Register an account** or **log in** if you already have one.
2. **Browse the available books** on the homepage.
3. **Search for book** by title, author, or genre using the search bar.
4. **Add a new book** by navigating to the "Add Book" page.
5. **Edit book details** by clicking the "Edit" button on a book.
6. **Delete a book** by clicking the "Delete" button on a book.

