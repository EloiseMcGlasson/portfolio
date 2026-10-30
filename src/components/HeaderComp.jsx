import avatar from "../assets/images/moi.jpg"
import { LinkedinOutlined, GithubOutlined, MessageOutlined } from "@ant-design/icons"
import { Button } from "antd";
const HeaderComp = () => {

    return (
        <header>
            <div className="left">
                <img src={avatar} alt="user" />
                <div className="user-infos">
                    <h1>Éloïse McGlasson</h1>
                    <h2>Développeuse D&apos;application Web</h2>
                    <div className="contacts">
                        <div className="contact-item">
                            <a
                                href="https://www.linkedin.com/in/elo%C3%AFse-mcglasson-866321172/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir mon profil LinkedIn (nouvel onglet)"
                            >
                                <LinkedinOutlined />
                            </a>
                        </div>
                        <div className="contact-item">
                            <a
                                href="https://github.com/EloiseMcGlasson"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Voir mon profil GitHub (nouvel onglet)"
                            >
                                <GithubOutlined />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <Button className="contact-btn" icon={<MessageOutlined />} href="mailto:mcglasson@free.fr">
                    Contactez-moi</Button>

            </div>

        </header>
    )

}

export default HeaderComp