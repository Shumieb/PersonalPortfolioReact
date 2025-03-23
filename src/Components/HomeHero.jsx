import { Link } from "react-router"

function HomeHero() {
    return (
        <section>
            <div>
                <p>Front-End Developer</p>
                <p>Hello, my name is Shumie</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magnam doloremque eius ea assumenda debitis
                    deleniti nulla unde eligendi rerum! Unde.
                </p>
                <div>
                    <Link to="/projects" role="button">Projects</Link>
                    <Link to="/" role="button">LinkedIn</Link>
                </div>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="hero image"
                    className="w-full"
                />
            </div>
        </section>
    )
}

export default HomeHero