import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <section className="my-8">
            <p className="text-xl text-center py-1 text-fuchsia-950">Projects</p>
            <span className="mx-auto w-20 block custom-hr text-fuchsia-950"><hr /></span>
            <div className="mt-5 p-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects