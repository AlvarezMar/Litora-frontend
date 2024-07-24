function Menubar(){

    const menuItems = [
        "Books",
        "Best Sellers",
        "Recommended",
        "Publishers",
        "Authors",
        "Audiobooks",
        "Magazine",
        "Podcast"
    ]

    return <div className="border-b-2 border-gray-100">
        <div className="flex gap-2 max-w-screen-xl mx-auto px-10 pt-5 pb-4 font-semibold">
            {menuItems.map((item) => (
                <h2 key={item}><a href="#" className="hover:text-[#6D5DD7] hover:bg-[#F1F0FF] py-2 px-3 rounded-lg ease-in duration-100">{item}</a></h2>
            ))}
        </div>
    </div>
}

export default Menubar;