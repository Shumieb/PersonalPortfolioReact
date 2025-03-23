import ContactForm from "../Components/ContactForm"

function ContactPage() {
    return (
        <main>
            <p className="text-2xl text-center py-1 text-fuchsia-950">Contact Me</p>
            <span className="mx-auto w-40 block custom-hr text-fuchsia-950"><hr /></span>
            <ContactForm />
        </main>
    )
}

export default ContactPage