
function Book(){

    return <div className="flex flex-col bg-gray-200 border shadow rounded-md w-60 gap-3 p-2 items-center">
        <div className="animate-pulse rounded-md bg-slate-400 h-72 w-52"></div>
        <h1 className="text-center font-bold">Titulo del libro</h1>
        <button className="flex mx-auto bg-green-600 p-2 rounded-lg text-white font-bold">
            Ver producto
        </button>
    </div>

}

export default Book;