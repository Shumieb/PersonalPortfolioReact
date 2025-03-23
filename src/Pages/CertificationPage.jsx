import CertificateCard from "../Components/CertificateCard"

function CertificationPage() {
    return (
        <main>
            <section className="my-5">
                <p className="text-2xl text-center py-1 text-fuchsia-950">Certification</p>
                <span className="mx-auto w-34 block custom-hr text-fuchsia-950"><hr /></span>
                <div className="mt-8">
                    <CertificateCard />
                    <CertificateCard />
                    <CertificateCard />
                    <CertificateCard />
                    <CertificateCard />
                </div>
            </section>
        </main>
    )
}

export default CertificationPage