import { Link } from "react-router-dom";

const NotFoundComp = () => {
    return (
        <main className="not-found">
            <section className="not-found-card">
                <span className="not-found-code">404</span>
                <h1>Oups, cette page est introuvable !</h1>
                <p>
                    La page que tu recherches n&apos;existe pas
                    ou n&apos;est plus disponible.
                </p>
                <Link to="/" className="not-found-link">
                    Retour à l&apos;accueil
                </Link>
            </section>
        </main>
    );
};

export default NotFoundComp;