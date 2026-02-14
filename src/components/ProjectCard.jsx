import "./ProjectCard.css";


export default function ProjectCard ({image, title, description, tags, badge, badgeColor}) {
    return (
        <div className="project-card">

            {badge && (
                <div className="project-badge" style={{backgroundColor: badgeColor}}>
                    {badge}
                </div>
            )}

            <div className="project-image">
                <img src={image} alt={title}/>
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                <div className="project-tags">
                    {tags.map((tag,index) => (
                        <span className="project-tag" key={index}>
                        {tag}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    );
}