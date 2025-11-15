import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard", () => {
    it("renders project title and description", () => {
        render(
            <ProjectCard
                project={{ id: '1', title: "Test Project", description: "Desc",   owner: 'Owner' }}
            />
        );

        expect(screen.getByText("Test Project")).toBeInTheDocument();
        expect(screen.getByText("Desc")).toBeInTheDocument();
    });
});
