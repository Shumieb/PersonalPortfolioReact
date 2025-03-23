import React from 'react'

function ContactForm() {
    return (
        <form className='bg-fuchsia-900 rounded-md p-2 mt-5 drop-shadow-lg hover:drop-shadow-xl'>
            <div className="pb-12 px-5">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="name"
                            className="block text-xl font-medium text-white"
                        >
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3 py-1 text-lg text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-800 sm:text-lg"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="email"
                            className="block text-xl font-medium text-white"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-800 sm:text-lg"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="message"
                            className="block text-xl font-medium text-white"
                        >
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-lg font-semibold text-white cursor-pointer"
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-white px-3 py-2 text-lg font-semibold text-fuchsia-950 cursor-pointer shadow-xs hover:bg-fuchsia-100 hover:drop-shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm