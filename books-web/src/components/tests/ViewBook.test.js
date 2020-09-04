import React from 'react';
import { render } from '@testing-library/react';

import BookView from "../BookView";

test("renders post data", () => {
  const mockBook = { 
    id: 1,
    title: "Mock title",
    author: "Mock author",
    category: "Mock category",
    publicationDate: "Mock publication date"
  };

  const { getByText } = render(<BookView book={mockBook} />);
  const author = getByText(/Mock author/);
  const category = getByText(/Mock category/);
  const publicationDate = getByText(/Mock publication date/);

  expect(author).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(publicationDate).toBeInTheDocument();
  expect(document.querySelector("img").getAttribute("src")).toBe("http://via.placeholder.com/130x180");
});