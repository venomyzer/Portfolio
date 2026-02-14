import './App.css';

import ProfileCard from "./components/ProfileCard";
import DevelopmentSection from "./components/DevelopmentSection.jsx";

function App() {
    return (
        <div className="app">
            <div className="top-accent"></div>
            <div className="container">
                <ProfileCard />
                <DevelopmentSection />
            </div>
        </div>
    );
}

export default App;