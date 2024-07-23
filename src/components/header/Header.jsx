function Header(){


    return <div className="flex flex-col max-w-screen-xl mx-auto py-10 px-6 gap-4">
        <div className="grid gap-4" style={{gridTemplateColumns: '3fr 1fr'}}>
            <div className="grid grid-cols-2 bg-[#F2F0FE] p-16 rounded-2xl">
                <div className="flex flex-col gap-4">
                    <span className="text-[#6D5DD7] font-semibold text-xl">Now on Sale</span>
                    <h1 className="text-4xl font-bold">The classics of literature in the palm of your hand</h1>
                    <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem veritatis sapiente numquam nesciunt labore aperiam amet nihil, incidunt minus pariatur blanditiis!</p>
                    <button className="self-start bg-[#6D5DD7] text-white px-4 py-2 rounded-lg font-semibold">Get the deal</button>
                </div>
            </div>

            <div className="bg-slate-400 rounded-2xl text-center text-white">
                <div>
                    <h2 className="text-3xl font-semibold">Best Seller</h2>
                    <p className="text-sm">Based sales this week</p>
                </div>
            </div>

        </div>

        <div className="secondary_section">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#FEF8F1] rounded-2xl p-7 grid grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold">New Arrivals</h2>
                        <button>Latests books</button>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="bg-[#E6F7E6] rounded-2xl p-7 grid grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold">Special 50% Off</h2>
                        <button>Get the Deal</button>
                    </div>
                    <div>

                    </div>

                </div>
                <div className="bg-[#E6F2FE] rounded-2xl p-7 grid grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold">Free Shipping!</h2>
                        <p>on orders of $39 or more</p>
                    </div>
                    <div></div>
    

                </div>
            </div>

        </div>

    </div>
}

export default Header;