import { Routes, Route } from "react-router-dom";
import { ProjectsList } from "./pages/ProjectsList/ProjectsList.tsx";
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails.tsx";

import "./App.css";

export default function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<ProjectsList />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
        </div>
    );
}
