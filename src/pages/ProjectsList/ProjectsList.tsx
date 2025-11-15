import { useState } from "react";
import { Link } from "react-router-dom";
import {useProjects} from "../../hooks/useProjects.ts";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";

import "./ProjectsList.css";

export const ProjectsList = ()=> {
    const [query, setQuery] = useState("");
    const { items: projects } = useProjects();

    const filtered = projects.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                className="search-input"
                type="text"
                placeholder="Search…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div className="list">
                {filtered.map((p) => (
                    <Link key={p.id} to={`/projects/${p.id}`} style={{ textDecoration: "none" }}>
                        <ProjectCard project={p} />
                    </Link>
                ))}
                {!filtered.length && (<>No projects found.</>)}
            </div>
        </div>
    );
}
