import React from 'react'

function ContactForm() {
    return (
        <form>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="example@google.com"
                />
            </div>
            <div>
                <label>Message</label>
                <textarea rows="4" cols="50" />
            </div>
            <button>
                Submit
            </button>
        </form>
    )
}

export default ContactForm