import React from "react";
import { render, screen } from "@testing-library/react";
import { RepoBox } from ".";
import { Repository } from "src/types/graphql";

test("renders RepoBox with dummy data", () => {
  render(
    <RepoBox
      repo={
        {
          name: "browsepy",
          description: "Simple web file browser using flask",
          updatedAt: "2020-09-25T22:37:17Z",
          primaryLanguage: {
            color: "#3572A5",
            name: "Python",
          },
        } as Repository
      }
    />
  );
  const nameElement = screen.getByText(/browsepy/i);
  expect(nameElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(
    /Simple web file browser using flask/i
  );
  expect(descriptionElement).toBeInTheDocument();

  const languageElement = screen.getByText(/Python/i);
  expect(languageElement).toBeInTheDocument();
});
