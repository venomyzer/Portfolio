import "./DevelopmentSection.css";

import htmlIcon from "../assets/icons/Html.svg";
import cssIcon from "../assets/icons/Css.svg";
import jsIcon from "../assets/icons/Javascript.svg";
import reactIcon from "../assets/icons/react.svg";
import figmaIcon from "../assets/icons/Figma.svg";
import javaIcon from "../assets/icons/Java.svg";
import gitIcon from "../assets/icons/Git.svg";
import viteIcon from "../assets/icons/Vite.svg";


const technologies = [
    {name: "HTML", icon: htmlIcon},
    {name: "CSS", icon: cssIcon},
    {name: "Javascript", icon: jsIcon},
    {name: "React", icon: reactIcon},
    {name: "Figma", icon: figmaIcon},
    {name: "Java", icon: javaIcon},
    {name: "Git", icon: gitIcon},
    {name: "Vite", icon: viteIcon},
];

export default function DevelopmentSection() {
    return (
        <section className="development">

            <div className="dev-header">
                <h1>Development</h1>
                <h2>Technologies I use:</h2>
            </div>

            <div className="tech-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="tech-card">
                        <img src={tech.icon} alt={tech.name} className="tech-icon" />
                        {tech.name}
                    </div>
                ))}
            </div>

            <div className="projects-section">
                <h2 className="projects-title">Projects:</h2>

                <div className="projects-grid">
                    Project Cards
                </div>
            </div>

        </section>
    );
}