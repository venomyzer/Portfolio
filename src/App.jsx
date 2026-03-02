import './App.css';
import { useEffect, useState } from 'react';

import ProfileCard from "./components/ProfileCard";
import DevelopmentSection from "./components/DevelopmentSection.jsx";

function App() {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) {
            return;
        }

        const cursor = document.querySelector(".custom-cursor");

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = mouseX;
        let currentY = mouseY;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            if (cursor) {
                cursor.style.left = currentX + "px";
                cursor.style.top = currentY + "px";
            }

            document.documentElement.style.setProperty("--mouse-x", `${currentX}px`);
            document.documentElement.style.setProperty("--mouse-y", `${currentY}px`);

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <div className="app">
            <div className="custom-cursor"></div>

            <div className="top-accent"></div>
            <div className={`container ${expanded ? "container--expanded" : ""}`}>
                <ProfileCard expanded={expanded} />
                <DevelopmentSection
                    expanded={expanded}
                    onExpand={() => setExpanded(true)}
                    onCollapse={() => setExpanded(false)}
                />
            </div>
            <div className="spotify"></div>
        </div>
    );
}

export default App;