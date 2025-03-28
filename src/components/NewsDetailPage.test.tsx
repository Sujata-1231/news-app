import { render, screen } from "@testing-library/react";
import NewsDetailPage from "./NewsDetailPage";
import { vi } from "vitest";

vi.mock("react-router-dom", () => ({
  useParams: () => ({ id: "0" }),
}));
vi.mock("../redux/hooks", () => ({
  useAppSelector: () => [
    {
      title: "Test Title",
      urlToImage: "https://example.com/image.jpg",
      description: "Test Description",
      content: "Test Content",
    },
  ],
}));

test("renders news detail correctly", () => {
  render(<NewsDetailPage />);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
  expect(screen.getByAltText("Test Title")).toHaveAttribute(
    "src",
    "https://example.com/image.jpg"
  );
});
