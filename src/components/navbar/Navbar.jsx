import Logo from "../logo/Logo";

import cart from "../../assets/navbar/cart.svg";
import user from "../../assets/navbar/user.svg";
import search from "../../assets/navbar/search.svg";
import { Link } from "react-router-dom";

function Navbar(){

    return <div className="border-b-gray-200 border-b-2">
        <div className="flex items-center justify-between py-4 px-10 max-w-screen-xl mx-auto">
            <Link to="/"><Logo/></Link>
            <div className="searchBar flex-grow max-w-xl flex rounded-lg border-2">
                <input className="focus:outline-none w-full p-2 bg-transparent" type="text" placeholder="Search over 10 million book titles"/>
                <button className="border-l-2 px-5">
                    <img src={search} alt="" width="25px"/>
                </button>
            </div>

            <div className="menu flex gap-2">
                <img src={cart} alt="" width="40px"/>
                {/* <img src={user} alt="" width="40px"/> */}

            </div>

            <div className="flex gap-3">

                <Link to="/login">
                    <button className="bg-[#F1F0FF] text-[#6D5DD7] px-4 py-2 rounded-lg font-semibold" >Log in</button>
                </Link>
                <button className="flex gap-1 items-center bg-[#6D5DD7] text-white pr-5 px-3 py-1 rounded-lg font-semibold">
                     <img src={user} alt="" width="25px"/>
                    Sign up
                </button>

            </div>

        </div>
    </div>

}

export default Navbar;