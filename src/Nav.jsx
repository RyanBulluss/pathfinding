

const Nav = ({ setFinding, resetState }) => {


    return (
        <nav className="w-full bg-slate-300 h-[10vh] flex justify-around">
            <button className="hover:text-gray-500" onClick={resetState}>Change</button>
            <button className="hover:text-gray-500" onClick={resetState}>Clear</button>
            <button className="hover:text-gray-500" onClick={() => setFinding(f => !f)}>Start</button>
        </nav>
    )
}

export default Nav;