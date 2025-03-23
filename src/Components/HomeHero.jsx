import { Link } from "react-router"

function HomeHero() {
    return (
        <section className="grid grid-cols-2 gap-1 my-10">
            <div className="p-2 flex flex-col justify-center">
                <p className="text-base text-fuchsia-900 pt-1">Front-End Developer</p>
                <p className="text-2xl font-semibold">Hello, my name is Shumie</p>
                <p className="py-2 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magnam doloremque eius ea assumenda debitis
                    deleniti nulla unde eligendi rerum! Unde.
                </p>
                <div className="mt-2 py-2">
                    <Link
                        className="rounded-sm bg-fuchsia-950 text-white px-4 py-2 text-base mr-5 drop-shadow-lg hover:bg-fuchsia-800"
                        to="/projects"
                        role="button"
                    >
                        Projects
                    </Link>
                    <Link
                        className="rounded-sm bg-rose-950 text-white px-4 py-2 text-base mr-l drop-shadow-lg hover:bg-rose-800"
                        to="/"
                        role="button">
                        LinkedIn
                    </Link>
                </div>
            </div>
            <div className="rounded-md">
                <img
                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="hero image"
                    className="w-full rounded-md drop-shadow-lg"
                />
            </div>
        </section>
    )
}

export default HomeHero