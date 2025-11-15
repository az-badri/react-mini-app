import { useState, useMemo } from 'react';
import { projects as mockProjects, type Project } from '../api/projectsData';

export function useProjects(initialQuery: string = '') {
    const [query, setQuery] = useState(initialQuery);
    const [items, setItems] = useState<Project[]>([...mockProjects]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.owner.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    }, [items, query]);

    const getById = (id: string): Project | null => items.find(p => p.id === id) ?? null;

    return { items: filtered, rawItems: items, query, setQuery, getById, setItems };
}
