import logo from "../../assets/logoFooter.svg"

function LogoFooter(){

    return <div className="flex gap-3 mb-5">
        <img src={logo} alt="" width="50px"/>
        <div>
            <h1 className="text-4xl font-bold text-white -mb-1.5">Litora</h1>
            <span className="tracking-[.125em] font-semibold text-white">Book Store</span>
        </div>
    </div>
}

export default LogoFooter;