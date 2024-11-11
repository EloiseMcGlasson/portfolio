import React from "react";
import chat from "../assets/images/panneau.jpeg"

import { Button, Divider } from "antd";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import { experience} from "../data/data";
import { Projets } from "../data/projects";
import AsideComp from "./AsideComp";
import { Link } from "react-router-dom";




const BodyComp = () => {
    
    return (
        <>
            <body className="main">
                <div className="body-container">
                    <div className="left">
                        <section>
                            <article>
                                <h2>À propos de moi</h2>
                                <p>Développeuse web en formation, je suis actuellement en reconversion professionnelle et étudie à Ada Tech School pour devenir conceptrice développeuse d’applications. Passionnée par le développement back-end et motivée par la création de solutions durables et fonctionnelles, j’ai acquis de solides bases en PHP, JavaScript, ReactJS et SQL.

Au travers de projets comme la refonte en cours du site Radio Zinzine et la création d'une API REST pour cette radio, j’ai renforcé mes compétences en développement agile et mon intérêt pour la qualité et l'optimisation du code. Curieuse, persévérante et dotée d’un bon esprit d’équipe, je recherche une alternance de 12 mois pour contribuer activement aux projets d'une entreprise innovante et stimulante.</p>
                            </article>
                        </section>
                        <section className="projects">
                            <h2>Mes derniers projets</h2>
                            <article>
                                <img className="featureImg" src={chat} alt="chat" />
                                <div className="project-info">
                                    <h3>
                                        Projet en cours
                                    </h3>
                                    <h4>Site de Radio Zinzine</h4>
                                    <p>Le projet Radio Zinzine consiste en la refonte complète du site internet de cette radio associative, avec pour objectif de moderniser l’interface et d’améliorer l’expérience utilisateur. Radio Zinzine, riche d'une histoire engagée, diffuse des contenus alternatifs, et cette refonte vise à offrir un accès plus fluide et moderne à ses auditeurs.

En tant que développeuse solo sur ce projet, j’assure la migration et la restructuration du site en utilisant Symfony 7 pour le back-end et Twig pour le rendu des templates. Ce développement inclut également la création d’une API REST pour faciliter la gestion des données de la radio. Je travaille à transformer le site actuel, en PHP 5 avec une couche JavaScript/Ajax, vers cette nouvelle architecture plus performante et maintenable.

Ce projet me permet de travailler de manière autonome tout en renforçant mes compétences en Symfony et Twig, du développement back-end à la gestion de projet, et d’apporter une contribution significative à une initiative culturelle et indépendante.</p>
                                    <div className="btn-link">
                                        <Button className="btn" icon={<LikeOutlined />}>Soutenir mon projet</Button>
                                    </div>
                                </div>
                            </article>
                            <Divider style={{ backgroundColor: "#ffff" }} />
                            {
                                Projets.map((item) => {
                                    let url = "/Projet/"+ item.id
                                    return (
                                    <article className="article-item" key={item.id}>
                                        <div className="left">
                                            <img src={item.imagePres.src} alt={item.imagePres.alt} />

                                        </div>
                                        <div className="right">
                                            <h3>{item.title}</h3>
                                            <p>
                                                {item.description[0]}
                                            </p>
                                            
                                            <Link to={url} icon={<LinkOutlined />} state={item.id}>En savoir plus</Link>
                                        </div>
                                    </article>
                                    )
                                })
                            }

                        </section>
                        <section className="experiences">
                            <h2>Expériences Professionnelles</h2>
                            {experience.map((item) => {
                                return (
                                    <article key={item.id}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </article>);
                            })
                            }

                        </section>
                    </div>
                    <AsideComp />
                </div >
                
            </body >
        </>
    )

}

export default BodyComp