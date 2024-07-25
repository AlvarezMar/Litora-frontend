import favorite from "../assets/books/favorite.svg"
function Book({book}){
    const {title, author, imageURL} = book;

    return <div className="flex flex-col gap-3 px-5 items-center relative transition ease-in hover:scale-105 bg-white hover:shadow-2xl py-1 rounded-2xl justify-center">
        <img src={imageURL} alt="" width="190px" className="rounded-xl"/>
        <h1 className="text-center font-bold text-lg">{title}</h1>
        <h2 className="text-[#6D5DD7] font-semibold -mt-3">{author}</h2>
        <p>rating</p>
        <img src={favorite} alt="" className="bg-white absolute right-9 top-7 p-1.5 rounded-md" width="35px"/>

        <button className=" bg-[#6D5DD7] w-full py-3 rounded-xl text-white font-semibold">Add to Cart</button>
    </div>

}

export default Book;