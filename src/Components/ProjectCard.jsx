import { Link } from "react-router"

function ProjectCard() {
    return (
        <div className="rounded-md bg-fuchsia-50 grid grid-cols-2 gap-1 mb-8 drop-shadow-lg hover:drop-shadow-xl">
            <div className="py-2 flex flex-col justify-center px-4">
                <p className="text-xl pt-2 text-fuchsia-950">Project Name</p>
                <p className="text-base text-gray-400">Completed: May 2025</p>
                <p className="py-4 text-lg mb-5 text-fuchsia-950">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dolorum vitae saepe dicta ab excepturi
                    optio adipisci corrupti temporibus porro?
                </p>
                <Link
                    to="/project/1"
                    role="button"
                    className="bg-fuchsia-950 px-4 py-2 text-white rounded-sm w-30 text-center drop-shadow-lg hover:bg-fuchsia-800 hover:drop-shadow-xl"
                >
                    View Project
                </Link>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="project image"
                    className="rounded-r-md"
                />
            </div>
        </div>
    )
}

export default ProjectCard