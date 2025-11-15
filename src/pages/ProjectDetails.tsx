import type {FC} from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

const ProjectDetails: FC = () => {
    const { id } = useParams<{ id: string }>()
    const { getById } = useProjects()
    const project = id ? getById(id) : null

    if (!project) {
        return (
            <div>
                <p>Project not found.</p>
                <Link to="/">Go Back to list</Link>
            </div>
        )
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>Owner:{project.owner}</p>
            <p>{project.description}</p>
            <Link to="/">Back to list</Link>
        </div>
    )
}

export default ProjectDetails
