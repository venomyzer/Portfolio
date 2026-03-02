import banner from "../assets/images/ogbbanner.png"
import avatar from "../assets/images/ogpfp.png"

import {FaGithub, FaTwitter, FaLinkedin, FaSpotify, FaBehanceSquare, FaDiscord} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

import "./ProfileCard.css";

export default function ProfileCard({ expanded }) {
    return (
        <aside className={`profile-card ${expanded ? "profile-card--hidden" : ""}`}>

            <div className="banner-wrapper">
                <img src={banner} alt="Banner" className="banner-img" />
            </div>
            <div className="card-content">
                <div className="avatar-wrapper">
                    <img src={avatar} alt="PFP" className="avatar"/>
                    <span className="status-dot"></span>
                    <div className="status-bubble-wrapper">
                        <div className="bubble-dot bubble-dot-1"></div>
                        <div className="bubble-dot bubble-dot-2"></div>
                        <div className="status-bubble">grinding DSA problems...</div>
                    </div>
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
                    <a href="https://www.linkedin.com/in/venomyzer/">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/venomyzertm" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://open.spotify.com/user/nqxn2nob7aksazkrm0ssjva57" target="_blank" rel="noopener noreferrer">
                        <FaSpotify />
                    </a>
                    <a href="https://www.behance.net/venomyzer" target="_blank" rel="noopener noreferrer">
                        <FaBehanceSquare />
                    </a>
                    <a href="https://discord.com/users/1135850360892829897" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>
                    <a href="mailto:bibekdastm@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail />
                    </a>
                </div>
            </div>
        </aside>
    );
}