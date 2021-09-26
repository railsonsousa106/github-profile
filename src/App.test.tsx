import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { useGithubProfileQuery } from "./types/graphql";

jest.mock("./types/graphql", () => ({
  useGithubProfileQuery: jest.fn(),
}));

jest.mock("./partials", () => ({
  SearchBoard: () => <div>Search Board</div>,
  ProfileBoard: () => <div>Profile Board</div>,
}));

describe("profile test", () => {
  it("renders profile board", () => {
    // @ts-expect-error: Let's ignore a compile error like this unreachable code
    useGithubProfileQuery.mockReturnValueOnce({ data: true });

    const wrapper = render(<App />);

    expect(wrapper.getByText("Profile Board")).toBeTruthy();
  });

  it("renders search board", () => {
    // @ts-expect-error: Let's ignore a compile error like this unreachable code
    useGithubProfileQuery.mockReturnValueOnce({ data: false });

    const wrapper = render(<App />);

    expect(wrapper.getByText("Search Board")).toBeTruthy();
  });
});
