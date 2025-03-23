import { NavLink } from "react-router"

function NavBar() {
    return (
        <nav className="mb-5">
            <div className="w-5/6 flex mx-auto px-2 py-3">
                <NavLink to="/" className="px-1 text-lg">Shumie</NavLink>
                <ul className="flex-3 flex justify-end">
                    <li><NavLink to="/" className="mx-4 px-1 text-lg">Home</NavLink></li>
                    <li><NavLink to="/about" className="mx-4 px-1 text-lg">About</NavLink></li>
                    <li><NavLink to="/projects" className="mx-4 px-1 text-lg">Projects</NavLink></li>
                    <li><NavLink to="/certification" className="mx-4 px-1 text-lg">Certification</NavLink></li>
                    <li><NavLink to="/contact" className="mx-4 px-1 text-lg">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar