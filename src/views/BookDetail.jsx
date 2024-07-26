import favorite from "../assets/books/favorite.svg"
import share from "../assets/books/share.svg"
import cart from "../assets/books/cart.svg"
import { Rating } from "flowbite-react"
import BookRating from "../components/BookRating"

function BookDetail(){
    // const {title, author, publisher, isbn, tags, synopsis, imageURL, price, rating, stock} = book;

    const mockBook = {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K Rowling",
        publisher: "Niuvada",
        isbn: "2342-23421342354",
        tags: "Comedy",
        synopsis: "Harry Potter thinks he is an ordinary boy - until he is rescued by an owl, taken to Hogwarts School of Witchcraft and Wizardry, learns to play Quidditch and does battle in a deadly duel. The Reason: HARRY POTTER IS A WIZARD!",
        imageURL: "https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg",
        price: 123,
        rating: 4.2,
        stock: 12
    }

    return <div>
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid gap-3" style={{gridTemplateColumns: "2fr 1fr"}}>
            <div className="flex gap-7">
                <div>
                    <img src={mockBook.imageURL} alt="" className="max-w-[280px] rounded-xl mb-5"/>
                    <h2 className="font-bold text-2xl">Book Details:</h2>
                    <div className="flex flex-col gap-1 mt-3">
                        <p><span className="font-bold">Publisher: </span>{mockBook.publisher}</p>
                        <p><span className="font-bold">ISBN: </span>{mockBook.isbn}</p>
                        <p><span className="font-bold">Language: </span>English</p>
                        <p><span className="font-bold">Page number: </span>234</p>
                        <p><span className="font-bold">Edition year:</span>2005</p>

                    </div>

                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">{mockBook.title}</h1>
                    <h2 className="text-2xl text-gray-500">{mockBook.author}</h2>
                    <span>{mockBook.publisher} - {mockBook.isbn}</span>
                    <span className="bg-[#F1F0FF] text-[#6D5DD7] font-bold px-4 py-1 w-fit rounded-full">{mockBook.tags}</span>
                    <div>
                        <h2 className="font-bold text-2xl mt-5 mb-2">Synopsis</h2>
                        <p>{mockBook.synopsis}</p>
                    </div>

                </div>

            </div>

            <div className="flex flex-col gap-4 border-l-2 p-4">

                <span className="font-bold text-4xl">${mockBook.price}</span>
                <button className="flex justify-center items-center bg-[#6D5DD7] text-white font-bold rounded-xl p-3">
                    <img src={cart} alt="" width="30px"/>
                    Add to cart</button>

                <p className="bg-[#F1F0FF] text-[#6D5DD7] p-4">Sign up for our Newsletter and get $25 discount on your first shipping</p>

                <div className="grid grid-cols-2">
                    <button className="flex justify-center items-center gap-1 hover:bg-[#F1F0FF] hover:text-[#6D5DD7] font-bold p-2 rounded-lg transition ease-in">
                        <img src={favorite} alt="" width="25px"/>
                        Add to wishlist
                    </button>

                    <button className="flex justify-center items-center gap-1 hover:bg-[#F1F0FF] hover:text-[#6D5DD7] font-bold p-2 rounded-lg transition ease-in">
                        <img src={share} alt="" width="25px"/>
                        Share
                    </button>
                </div>
            </div>

        </div>

        <div className="flex flex-col items-center gap-1 mb-10">
            <h3 className="text-2xl">Have you read <span className="font-bold">{mockBook.title}</span>?</h3>
            <BookRating rating={mockBook.rating}/>
            <button className="bg-[#6D5DD7] text-white px-4 py-3 mt-5 font-bold rounded-lg">Leave my review</button>
        </div>

    </div> 
}

export default BookDetail;