import {type FC } from 'react'
import type {Project} from '../api/projectsData'

interface ProjectCardProps {
    project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
    <div className="card">
        <h2 id={`title-${project.id}`}>{project.title}</h2>
        <p>Owner:{project.owner}</p>
        <p>{project.description}</p>
    </div>
)

export default ProjectCard
