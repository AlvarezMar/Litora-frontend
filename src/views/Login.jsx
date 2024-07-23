function Login(){

    return <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl m-5">Login</h1>

        <div className="flex flex-col gap-6">
            <div>
                <label htmlFor="user" className="block">User:</label>         
                <input id="user" type="text" placeholder="AlvarezMar"/>
            </div>

            <div>
                <label htmlFor="password" className="block">Password:</label>
                <input id="password" type="password" placeholder="pass12345"/>
            </div>

            <button className="bg-[#6D5DD7] text-white font-bold p-2 rounded-lg">
                Sign In
            </button>

        </div>
    </div>
}

export default Login;