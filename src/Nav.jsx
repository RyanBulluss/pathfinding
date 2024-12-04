

const Nav = ({ setFinding }) => {


    return (
        <nav className="w-full bg-slate-300 h-[10vh] flex justify-around hover:text-gray-500">
            <button>Algorithm</button>
            <button>Maze</button>
            <button>Clear</button>
            <button onClick={() => setFinding(f => !f)}>Start</button>
        </nav>
    )
}

export default Nav;