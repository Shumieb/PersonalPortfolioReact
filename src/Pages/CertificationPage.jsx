import CertificateCard from "../Components/CertificateCard"
import Skills from "../Components/Skills"

function CertificationPage() {
    return (
        <main>
            <Skills />
            <section>
                <p>Certificates</p>
                <span><hr /></span>
                <div>
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