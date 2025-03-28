import { render } from "@testing-library/react";
import NewsItem from "./NewsItem";
import { Article } from "../redux/types";

test("renders news title and description", () => {
  const mockArticle: Article = {
    title: "Test Title",
    urlToImage: "https://example.com/image.jpg",
    author: "Test Author",
    publishedAt: new Date().toISOString(),
    description: "Test Description",
    content: "Full article content",
    url: "https://example.com",
    source: {
      id: null,
      name: "Example Source",
    },
  };

  render(<NewsItem article={mockArticle} onClick={() => {}} />);
});
