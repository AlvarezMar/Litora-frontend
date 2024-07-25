import { useEffect, useState } from "react";
import Book from "../components/Book";

function BooksGrid(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/books")
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.log("Error fetching books: ", error));
    }, []);

    return <div className="max-w-screen-xl mx-auto py-1">
        <div className="flex items-baseline gap-4 mb-4">
            <h1 className="text-3xl font-semibold pl-6">New Books</h1>
            <hr className="flex-grow border-t-4 border-gray-100 mr-7"/>
        </div>
        <div className="grid grid-cols-5 gap-1 ">
            {books.map((book) => (
                <Book key={book.id} book={book}/>
            ))}
        </div>

    </div>
}

export default BooksGrid;