import lightning from "../assets/features/lightning.svg"
import shield from "../assets/features/shield.svg"
import like from "../assets/features/like.svg"
import star from "../assets/features/star.svg"

function Features(){

    return <div className="grid grid-cols-4 gap-1 max-w-screen-xl px-10 py-10 mx-auto">
        <div className="flex items-center gap-5">
            <img className="bg-[#F2F0FE] p-2 rounded-lg" src={lightning} alt="" width="50px"/>
            <div>
                <h2 className="font-bold text-lg mb-1">Quick Delivery</h2>
                <p className="text-sm text-gray-600 font-semibold">Fast and reliable delivery to your doorstep.</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <img className="bg-[#F2F0FE] p-2 rounded-lg" src={shield} alt="" width="50px"/>
            <div>
                <h2 className="font-bold text-lg mb-1">Secure Payment</h2>
                <p className="text-sm text-gray-600 font-semibold">Safe and secure payment methods.</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <img className="bg-[#F2F0FE] p-2 rounded-lg" src={like} alt="" width="50px"/>
            <div>
                <h2 className="font-bold text-lg mb-1">Best Quality</h2>
                <p className="text-sm text-gray-600 font-semibold">Top-quality products guaranteed.</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <img className="bg-[#F2F0FE] p-2 rounded-lg" src={star} alt="" width="50px"/>
            <div>
                <h2 className="font-bold text-lg mb-1">Return Guarantee</h2>
                <p className="text-sm text-gray-600 font-semibold">Easy and hassle-free return policy.</p>
            </div>
        </div>

    </div>

}

export default Features;