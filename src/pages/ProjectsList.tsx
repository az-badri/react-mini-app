import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'
import ProjectCard from '../components/ProjectCard'

const ProjectsList: FC = () => {
    const { items, query, setQuery } = useProjects()

    return (
        <>
            <label htmlFor="search">Search projects</label>
            <input
                id="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
            />

            <div role="list">
                {items.length === 0 ? (
                    <p>No projects found.</p>
                ) : (
                    items.map(p => (
                        <div key={p.id}>
                            <Link to={`/projects/${p.id}`}>
                                <ProjectCard project={p} />
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default ProjectsList
