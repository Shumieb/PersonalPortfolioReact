import { Link } from "react-router"

function ProjectCard() {
    return (
        <div>
            <div>
                <p>Project Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dolorum vitae saepe dicta ab excepturi
                    optio adipisci corrupti temporibus porro?
                </p>
                <Link>View Project</Link>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="project image"
                />
            </div>
        </div>
    )
}

export default ProjectCard