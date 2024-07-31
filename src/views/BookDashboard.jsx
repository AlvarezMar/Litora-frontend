import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookDashboard(){

    const[books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/books")

        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.log("Error fetching books: ", error));
    }, []);

    const deleteBook = (id) => {
        fetch(`http://localhost:8080/api/v1/books/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setBooks(books.filter(book => book.id !== id));
                } else {
                    console.log("Failed to delete book.");
                }
            })
            .catch(error => console.log("Error deleting book: ", error));
    };

    return <div className="max-w-screen-xl mx-auto px-10 py-5">
        <h1 className="text-3xl font-bold">Litora Library</h1>
        <Link to={"/createBook"}>
            <button className="bg-blue-500 font-bold text-white p-2 rounded-lg">Add New Book</button>
        </Link>
        <table className="w-full">
            <thead>
                <tr className="border-b-2">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>ISBN</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {books.map((book) => ( 
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.isbn}</td>
                        <td>{book.price}</td>
                        <td>{book.stock}</td>
                        <td className="flex gap-3 justify-center">
                            <button className="bg-yellow-300 p-2 rounded-lg">Update</button>
                            <button onClick={() => deleteBook(book.id)} className="bg-red-600 text-white p-2 rounded-lg">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    </div>

}

export default BookDashboard;