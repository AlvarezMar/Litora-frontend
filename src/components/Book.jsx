import { useState } from "react";
import favorite from "../assets/books/favorite.svg"
import favoriteWhite from "../assets/books/favoriteWhite.svg"
import cart from "../assets/books/cart.svg"
import BookRating from "./BookRating";
import { Link } from "react-router-dom";

function Book({book}){
    const {title, author, imageURL, price, rating} = book;

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return <Link to="/bookDetail">
        <div className="flex flex-col gap-2 px-5 h-[26rem] items-center relative transition ease-linear hover:scale-105 hover:bg-white hover:z-10 rounded-2xl justify-center group z-0 -mb-5 duration-200">
            <div className="w-[190px] h-[284px] rounded-xl overflow-hidden">
                <img src={imageURL} alt="" className="w-full h-full object-cover"/>
            </div>
            <h1 className="text-center font-bold text-[1.05rem] truncate w-full">{title}</h1>
            <h2 className="text-[#6D5DD7] font-semibold -mt-3">{author}</h2>
                <BookRating rating={rating}/> 
            <button onClick={handleClick}>
                <img src={clicked ? favoriteWhite : favorite} alt="" className={`absolute right-10 top-7 p-1.5 group-hover:top-2 rounded-md transition ease-in-out duration-300 z-20 ${clicked ? "bg-[#6D5DD7]" : "bg-[#F2F0FE]"}`} width="35px"/>
            </button>

            <div className="hidden group-hover:flex items-center -mt-1 w-48 overflow-hidden h-10">
                <div className="w-1/3">
                    <p className="w-full font-bold text-lg text-gray-800 h-full text-center"><span className="text-sm">$</span>{price}</p>
                </div>
                <div className="w-2/3 h-full bg-[#6D5DD7] rounded-xl ml-3">
                    <button className="flex justify-center items-center gap-1 w-full h-full text-white font-semibold">
                        <img src={cart} alt="" width="25px"/>
                        Add
                    </button>

                </div>

            </div>

        </div>
    </Link>

}

export default Book;