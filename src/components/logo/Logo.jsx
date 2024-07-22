import logo from "../../assets/logo.svg"

function Logo(){

    return <div className="flex gap-3">
        <img src={logo} alt="" width="50px"/>
        <div>
            <h1 className="text-4xl font-bold text-[#101329] -mb-1.5">Litora</h1>
            <span className="tracking-[.125em] font-semibold text-[#a9abbd]">Book Store</span>
        </div>
    </div>
}

export default Logo;