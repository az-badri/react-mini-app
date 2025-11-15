import type {Project} from "../../api/projectsData.ts";
import "./ProjectCard.css";

interface Props {
    project: Project;
}

export const ProjectCard = ({ project }: Props)=> {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-text">{project.description}</p>
        </div>
    );
}

export default ProjectCard;