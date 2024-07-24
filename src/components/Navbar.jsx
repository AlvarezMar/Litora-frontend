import Logo from "./logo/Logo";

import cart from "../assets/navbar/cart.svg";
import user from "../assets/navbar/user.svg";
import search from "../assets/navbar/search.svg";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";

import styles from "./Navbar.module.css"

function Navbar(){

    return <div className={`${styles.navbar} sticky top-0 z-20 bg-white`}>
        <div className="">
            <div className="flex items-center justify-between py-4 px-10 max-w-screen-xl mx-auto pb-0">
                <Link to="/"><Logo/></Link>
                <div className="searchBar flex-grow max-w-xl flex rounded-lg border-2">
                    <input className="border-none focus:outline-none focus:ring-0 w-full p-2 bg-transparent" type="text" placeholder="Search over 10 million book titles"/>
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
                        <button className="bg-[#F1F0FF] text-[#6D5DD7] px-4 py-3 rounded-lg font-semibold" >Log in</button>
                    </Link>
                    <button className="flex gap-1 items-center bg-[#6D5DD7] text-white pr-4 px-2 py-1 rounded-lg font-semibold">
                        <img src={user} alt="" width="25px"/>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
        <div><Menubar/></div>
    </div>

}

export default Navbar;