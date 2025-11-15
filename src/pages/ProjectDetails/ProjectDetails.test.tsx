import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

vi.mock("../../hooks/useProjects.ts", () => ({
  useProjects: () => ({
    items: [
      { id: "1", title: "Alpha Project", description: "First project" },
      { id: "2", title: "Beta Project", description: "Second project" },
    ],
  }),
}));

describe("ProjectDetails", () => {
  it("renders details for an existing project", () => {
    render(
      <MemoryRouter initialEntries={["/projects/1"]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Alpha Project")).toBeInTheDocument();
    expect(screen.getByText("First project")).toBeInTheDocument();
    expect(screen.getByText(/← Back/)).toBeInTheDocument();
  });

  it("shows fallback when project is not found", () => {
    render(
      <MemoryRouter initialEntries={["/projects/999"]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Project not found.")).toBeInTheDocument();
  });
});
