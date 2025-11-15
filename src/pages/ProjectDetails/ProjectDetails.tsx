import { useParams, Link } from "react-router-dom";
import { useProjects } from "../../hooks/useProjects.ts";

import "./ProjectDetails.css";

export const ProjectDetails = () => {
    const { id } = useParams();
    const { items: projects } = useProjects();

    const project = projects.find((p) => p.id === String(id));

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <div>
            <div className="details-wrapper">
                <h2 className="details-title">{project.title}</h2>
                <p>{project.description}</p>
            </div>

            <Link className="back-link" to="/">
                ← Back
            </Link>
        </div>
    );
}

export default ProjectDetails;