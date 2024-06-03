import React from "react";
import chat from "../assets/images/cat.png"

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
                                <p>Après une carrière dans les métiers du secrétariat, je suis revenue à ma passion première, l'informatique.
                                    Un BTS et une Licence plus tard, je cherche toujours un poste pour mettre en pratique mes compétences.</p>
                            </article>
                        </section>
                        <section className="projects">
                            <h2>Mes derniers projets</h2>
                            <article>
                                <img className="featureImg" src={chat} alt="chat" />
                                <div className="project-info">
                                    <h3>
                                        Premier projet
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut quasi alias eligendi maiores omnis voluptates cum nulla inventore doloremque deleniti nobis temporibus, nisi ab accusantium quos doloribus, sed nam.
                                        Quam molestiae culpa sapiente, modi sunt exercitationem! Perspiciatis facilis excepturi, odio mollitia laboriosam nulla quisquam ad, explicabo eaque sit totam ipsum architecto aperiam quia sunt cupiditate suscipit assumenda autem ut.
                                        Illo incidunt ab repudiandae ea, consequatur minus porro nobis iusto voluptate doloremque ipsa placeat officia, asperiores sint. Magnam provident at sed reprehenderit corrupti ex, officiis nobis illo. Quod, dolore aspernatur!</p>
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