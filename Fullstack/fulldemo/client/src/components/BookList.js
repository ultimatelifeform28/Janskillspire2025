import React, { useEffect, useState } from 'react';
import { getBooks, addBook, deleteBook } from '../API/api'; // Adjust the path as needed
import { Link } from 'react-router-dom';

function BookList() {
    const [books, setBooks] = useState(null);

    useEffect(()=>{
        const getAllBooks= async () => {
          const response = await getBooks();
    
          console.log('Response from Express Server, Book list Components', response.data );

          setBooks(response.data);
        }
    
        getAllBooks()
    }, []) // Added dependency array to avoid infinite re-renders

    const handleSubmit = async (e) => {
        e.preventDefault();

        let title = e.tartget['title'].value;
        let author = e.target['author'].value;

        const response = await addBook({ title, author });

        console.log(' Response from DB', response.data);
    }

    const deleteBook = async (id) => {
        await deleteBook(id);
    }

    if(!books) return <div>Loading...</div>
    if(books.length === 0) return <div>No books found</div>

    return <div>
        <h2>Add a new book:</h2>
        <form on Submit={handleSubmit}>
            <input type="text" placeholder ="Title" name="title" required />
            <input type="text" placeholder ="Author" name="author" required />
            <button type="submit">Add Book</button>

        </form>
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>

            {
                books.map(book=>(
                    <tr>
                        <td>{book._id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td><Link to={`/edit/${book._id}`}>Edit</Link>
                            <Link onClick={() => deleteBook(book._id)}>Delete</Link>
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
}

export default BookList;