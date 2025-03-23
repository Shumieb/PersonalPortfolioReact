import { Link } from "react-router"

function CertificateCard() {
    return (
        <section className="rounded-md bg-fuchsia-50 grid grid-cols-2 gap-1 mb-8 drop-shadow-lg hover:drop-shadow-xl">
            <div>
                <img
                    src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="course image"
                    className="rounded-l-md"
                />
            </div>
            <div className="px-4 flex flex-col justify-center">
                <p className="text-xl pt-2 text-fuchsia-950">Course Name</p>
                <p className="text-lg text-fuchsia-800">Course Provider</p>
                <p className="text-base text-gray-400 mb-2">month and year </p>
                <p className="py-2 text-lg mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptate similique provident blanditiis,
                    reprehenderit quae quo voluptatum obcaecati sint itaque
                    facilis enim quam eaque unde sunt repellendus?
                    Veniam fugit quisquam a.
                </p>
                <Link
                    to="/"
                    role="button"
                    className="bg-fuchsia-950 px-4 py-2 text-white rounded-sm w-45 text-center drop-shadow-lg hover:bg-fuchsia-800 hover:drop-shadow-xl"
                >
                    View Certificate
                </Link>
            </div>
        </section>
    )
}

export default CertificateCard