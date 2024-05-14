
import React from "react";
import picochat from "../assets/images/Picochat.jpg"
import { Projets } from "../data/projects";
import { useLocation } from "react-router-dom";

const ProjetComp = () => {
    const { state } = useLocation();
    
    return (
        <>
            <article className="projet-article" key={Projets[state - 1].id}>
                <div className="haut">
                    <img src={Projets[state - 1].image} alt={Projets[state - 1].title} />

                </div>
                <div className="bas">
                    <h3>{Projets[state - 1].title}</h3>
                    <p>
                        {Projets[state - 1].description}
                    </p>

                    
                </div>
            </article>


        </>
    )
}
export default ProjetComp