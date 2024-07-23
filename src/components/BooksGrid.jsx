import Book from "../components/Book";

function BooksGrid(){

    return <div className="grid grid-cols-4 gap-10 max-w-screen-xl mx-auto px-20 py-10">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>

    </div>
}

export default BooksGrid;