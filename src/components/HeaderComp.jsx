import React from "react";
import avatar from "../assets/images/moi.jpg"
import { LinkedinOutlined, GithubOutlined, MessageOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { Link } from "react-router-dom";
const HeaderComp = () => {

    return (
        <header>
            <div className="left">
                <img src={avatar} alt="user" />
                <div className="user-infos">
                    <h1>Éloïse McGlasson</h1>
                    <h2>Développeuse D'application Web</h2>
                    <div className="contacts">
                        <div className="contact-item">
                            <Link to="https://www.linkedin.com/in/elo%C3%AFse-mcglasson-866321172/" target="_blank" ><LinkedinOutlined /></Link>
                        </div>
                        <div className="contact-item">
                            <Link to="https://github.com/EloiseMcGlasson" target="_blank"><GithubOutlined /></Link>
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