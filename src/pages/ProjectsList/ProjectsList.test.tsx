import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProjectsList } from "./ProjectsList";

vi.mock("../../hooks/useProjects.ts", () => ({
    useProjects: () => ({
        items: [
            { id: "1", title: "Alpha Project", description: "First project" },
            { id: "2", title: "Beta Project", description: "Second project" },
        ],
    }),
}));

describe("ProjectsList", () => {
    it("renders all projects", () => {
        render(
          <MemoryRouter>
              <ProjectsList />
          </MemoryRouter>
        );

        expect(screen.getByRole("list")).toBeInTheDocument();

        expect(screen.getByText("Alpha Project")).toBeInTheDocument();
        expect(screen.getByText("Beta Project")).toBeInTheDocument();
    });

    it("filters projects based on search input", () => {
        render(
          <MemoryRouter>
              <ProjectsList />
          </MemoryRouter>
        );

        const input = screen.getByRole("textbox");

        fireEvent.change(input, { target: { value: "Beta" } });

        expect(screen.queryByText("Alpha Project")).toBeNull();
        expect(screen.getByText("Beta Project")).toBeInTheDocument();
    });

    it("shows fallback message when no projects match", () => {
        render(
          <MemoryRouter>
              <ProjectsList />
          </MemoryRouter>
        );

        const input = screen.getByRole("textbox");

        fireEvent.change(input, { target: { value: "Gamma" } });

        expect(screen.getByText("No projects found.")).toBeInTheDocument();
    });
});
