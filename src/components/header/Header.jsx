function Header(){


    return <div className="grid max-w-screen-xl mx-auto gap-4 px-6 py-10" style={{gridTemplateColumns: '3fr 1fr'}}>
        <div className="grid grid-cols-2 bg-[#F2F0FE] p-16 rounded-2xl">
            <div className="flex flex-col gap-4">
                <span className="text-[#6D5DD7] font-semibold text-xl">Now on Sale</span>
                <h1 className="text-4xl font-bold">The classics of literature in the palm of your hand</h1>
                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem veritatis sapiente numquam nesciunt labore aperiam amet nihil, incidunt minus pariatur blanditiis!</p>
                <button className="self-start bg-[#6D5DD7] text-white px-4 py-2 rounded-lg font-semibold">Get the deal</button>
            </div>
            <div>

            </div>
        </div>
        <div className="bg-slate-400 rounded-2xl text-center text-white">
            <div>
                <h2 className="text-3xl font-semibold">Best Seller</h2>
                <p className="text-sm">Based sales this week</p>

            </div>

        </div>

    </div>
}

export default Header;