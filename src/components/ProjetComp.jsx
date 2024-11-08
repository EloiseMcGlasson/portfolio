import React from "react";
import { Projets } from "../data/projects";
import { useLocation, Link } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons"
import AsideComp from "./AsideComp";
const ProjetComp = () => {
    const { state } = useLocation();

    return (
        <>
            <article className="projet-article" key={Projets[state].id}>
                <div>
                <div className="haut">
                    <img src={Projets[state].imagePres.src} alt={Projets[state].imagePres.alt} />

                </div>
                <div className="bas">
                    <h3>{Projets[state].title}</h3>
                    
                    <p className="description">{Projets[state].description}</p>
                <div>
                <Link to={Projets[state].lien} target="_blank"><GithubOutlined /></Link>
                </div>
                </div>
            </div>
                
            <AsideComp />
            
            </article>

        </>
    )
}
export default ProjetComp