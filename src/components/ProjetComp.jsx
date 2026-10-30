import { Projets } from "../data/projects";
import { useParams } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons";
import AsideComp from "./AsideComp";
import NotFoundComp from "./NotFoundComp";

const ProjetComp = () => {
    const { projetId } = useParams();

    const projet = Projets.find((item) => item.id === projetId);

    if (!projet) {
        return <NotFoundComp />;
    }

    return (
        <article className="projet-article">
            <div>
                <div className="haut">
                    <img src={projet.imagePres.src} alt={projet.imagePres.alt} />
                </div>
                <div className="bas">
                    <h2>{projet.title}</h2>
                    <p className="description">{projet.description}</p>
                    <div>
                        <a
                            href={projet.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Voir le projet ${projet.title} sur GitHub (nouvel onglet)`}
                        >
                            <GithubOutlined aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
            <AsideComp />
        </article>
    );
};

export default ProjetComp;