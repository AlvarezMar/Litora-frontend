import BannerCarousel from "./BannerCarousel";
import styles from "./Header.module.css"

function Header(){
    return <div className="flex flex-col max-w-screen-xl mx-auto py-10 px-6 gap-4">
        <div className="grid gap-4" style={{gridTemplateColumns: '3fr 1fr'}}>
            <div><BannerCarousel/></div>

            <div className="bg-slate-400 rounded-2xl text-center text-white">
                <div>
                    <h2 className="text-3xl font-semibold">Best Seller</h2>
                    <p className="text-sm">Based sales this week</p>
                </div>
            </div>
        </div>

        <div className="secondary_section">
            <div className="grid grid-cols-3 gap-4">
                <div className= "bg-[#FEF8F1] rounded-2xl p-7 grid h-44 relative overflow-hidden" style={{gridTemplateColumns: "2fr 1fr"}}>

                    <div className="z-10">
                        <h2 className="text-2xl font-bold">New Arrivals</h2>
                        <button className="mt-5 bg-black text-white px-4 py-2 rounded-lg font-semibold">Latests books</button>
                    </div>

                    <img src="src\assets\book-cover-subtle-art.png" alt="" className="absolute -right-1 top-2 z-10" width="200px"/>

                    <div className={styles.banner_1_figure_1}></div>
                    <div className={styles.banner_1_figure_2}></div>
                </div>

                <div className= "bg-[#E7F1FB] rounded-2xl p-7 grid h-44 relative overflow-hidden" style={{gridTemplateColumns: "2fr 1fr"}}>

                    <div className="z-10">
                        <h2 className="text-2xl font-bold">Special 50% Off</h2>
                        <p>for our student community!</p>
                        <button className="mt-5 bg-black text-white px-4 py-2 rounded-lg font-semibold">Get the Deal</button>
                    </div>

                        <img src="src\assets\happy-student-girl-with-books-isolated-png.webp" alt="" className="z-10 -right-1 absolute" width="180px"/>

                        <div className={styles.banner_2_figure_1}></div>
                        <div className={styles.banner_2_figure_2}></div>
                </div>

                <div className={`${styles.header_news_3} text-white rounded-2xl p-7 h-44`}> 
                    <div className="flex flex-col justify-center items-center h-full">
                        <h2 className="text-3xl font-bold z-10">Free Shipping!</h2>
                        <p>on orders of $39 or more</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Header;