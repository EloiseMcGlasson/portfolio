import { Projets } from "../data/projects";
import { useParams, Link } from "react-router-dom";
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
                    <h3>{projet.title}</h3>
                    <p className="description">{projet.description}</p>
                    <div>
                        <Link to={projet.lien} target="_blank" rel="noopener noreferrer">
                            <GithubOutlined />
                        </Link>
                    </div>
                </div>
            </div>
            <AsideComp />
        </article>
    );
};

export default ProjetComp;