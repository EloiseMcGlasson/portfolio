import React from "react";
import { EnvironmentOutlined, LinkOutlined, MailOutlined } from "@ant-design/icons";
import { educations } from "../data/data";
import { Link } from "react-router-dom";

const AsideComp = () => {
    return (
        <>
            <aside>
                <div className="contacts section">
                    <div className="contact-item">
                        <EnvironmentOutlined />
                        <span>Vannes, France</span>
                    </div>
                    <div className="contact-item">
                        <MailOutlined />
                        <span><a href="mailto:mc.glasson@free.fr">mc.glasson@free.fr</a></span>
                    </div>
                    {/* <div className="contact-item">
                <LinkOutlined/>
                <span><a href="www.siteweb.com">www.siteweb.com</a></span>
            </div> */}
                </div>
                <div className="skills section">
                    <h2>Compétences</h2>
                    <p>
                        Même si mes compétences sont académiques, ma capacité d'adaptation et mon apétence à apprendre.
                    </p>
                    <div className="skills-list">
                        <div className="skill-item">
                            <span>PHP & Laravel</span>
                            <div className="full">
                                <div className="percent first"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span>bla</span>
                            <div className="full">
                                <div className="percent second"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <span>bla</span>
                            <div className="full">
                                <div className="percent third"></div>
                            </div>
                        </div>
                    </div>
                    <Link to="https://github.com/EloiseMcGlasson" target="_blank" icon={<LinkOutlined />}>En savoir plus sur GitHub</Link>
                </div>
                {/* <div className="section">
            <h2>Témoignages</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima, perferendis a enim doloremque, id reiciendis magnam maxime laborum ab natus molestiae ipsa iure asperiores nobis. Laudantium sequi pariatur vel.</p>
            <a href="https://www.linkedin.com/in/elo%C3%AFse-mcglasson-866321172/" target="_blank"><Button type="link" icon={<LinkOutlined />}>En savoir plus sur LinkedIn</Button></a>
        </div> */}
                <div className="section">
                    <h2>Éducation</h2>
                    {
                        educations.map((item) => {
                            return (
                                <div className="education-item" key={item.id}>
                                    <h3>{item.title}</h3>
                                    <span>{item.name}</span>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="section">
                    <h2>Langues</h2>
                    <div className="language-item">
                        <h3>Français</h3>
                        <span>Locutrice native</span>
                        <div className="full">
                            <div className="percent french"></div>
                        </div>
                    </div>
                    <div className="language-item">
                        <h3>Anglais</h3>
                        <span>Compétence professionnelle</span>
                        <div className="full">
                            <div className="percent english"></div>
                        </div>
                    </div>
                </div>

            </aside>
        </>
    )

}

export default AsideComp