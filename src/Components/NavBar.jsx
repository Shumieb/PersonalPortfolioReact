import { NavLink } from "react-router"

function NavBar() {
    return (
        <nav className="mb-8">
            <div className="w-5/6 flex mx-auto px-2 py-3">
                <NavLink
                    to="/"
                    className="px-1 text-xl text-fuchsia-950 font-semibold"
                >
                    Shumie
                </NavLink>
                <ul className="flex-3 flex justify-end">
                    <li>
                        <NavLink
                            to="/"
                            className="mx-4 px-1 text-lg text-fuchsia-950"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="mx-4 px-1 text-lg text-fuchsia-950"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className="mx-4 px-1 text-lg text-fuchsia-950"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/certification"
                            className="mx-4 px-1 text-lg text-fuchsia-950"
                        >
                            Certification
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="mx-4 px-1 text-lg text-fuchsia-950"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar