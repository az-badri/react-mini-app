import type { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectsList from './pages/ProjectsList'
import ProjectDetails from './pages/ProjectDetails'

const App: FC = () => {
    return (
        <div className="app">
            <main>
                <Routes>
                    <Route path="/" element={<ProjectsList />} />
                    <Route path="/projects/:id" element={<ProjectDetails />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
