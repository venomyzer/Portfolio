import banner from "../assets/images/ogbbanner.png"
import avatar from "../assets/images/ogpfp.png"

import {FaGithub, FaTwitter, FaLinkedin, FaSpotify, FaBehanceSquare, FaDiscord} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

import "./ProfileCard.css";

export default function ProfileCard() {
    return (
        <aside className="profile-card">

            <div className="banner-wrapper">
                <img src={banner} alt="Banner" className="banner-img" />
            </div>
            <div className="card-content">
                <div className="avatar-wrapper">
                    <img src={avatar} alt="PFP" className="avatar"/>
                    <span className="status-dot"></span>
                </div>

                <h1 className="name">Venomyzer</h1>
                <p className="alias">~alias cheeezzy</p>

                <div className="roles">
                    <span className="role">Front End Developer</span>
                    <span className="role">Graphic Designer</span>
                </div>

                <p className="bio">Hi there, I am Bibek, a self taught developer and designer. Welcome to my portfolio. Have a good time! 😉</p>

                <div className="social-links">
                    <a href="https://github.com/venomyzer" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="#">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="#">
                        <FaSpotify />
                    </a>
                    <a href="#">
                        <FaBehanceSquare />
                    </a>
                    <a href="#">
                        <FaDiscord />
                    </a>
                    <a href="mailto:your@email.com">
                        <MdEmail />
                    </a>
                </div>
            </div>
        </aside>
    );
}