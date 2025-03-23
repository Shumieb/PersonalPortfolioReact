function AboutPage() {
    return (
        <main className="my-10 min-h-[70vh]">
            <div className="grid grid-cols-2">
                <section className="pl-5 pr-2 flex flex-col justify-center">
                    <p className="text-2xl mb-2 text-fuchsia-950 font-semibold">About Me</p>
                    <p className="text-lg text-fuchsia-950 mb-5 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Debitis possimus iusto quaerat ut, autem earum
                        fuga reprehenderit ratione rerum provident.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nemo.
                        Voluptas voluptatem nostrum possimus hic tenetur repudiandae deleniti molestiae quis!
                    </p>
                    <button
                        className="bg-fuchsia-950 text-white text-center text-lg p-2 rounded-sm w-40 cursor-pointer hover:bg-fuchsia-800"
                    >
                        Resume
                    </button>
                </section>
                <section>
                    <div className="rounded-md">
                        <img
                            src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="portrait"
                            className="rounded-md drop-shadow-lg"
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AboutPage