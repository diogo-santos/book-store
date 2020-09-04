import React from 'react';
import { render } from '@testing-library/react';

import Modal from "../Modal";
import BookView from "../BookView";

test("renders post data", () => {
  const mockBook = { 
    id: 1,
    title: "Mock title",
    author: "Mock author",
    category: "Mock category",
    publicationDate: "Mock publication date",
    image: "Mock image url"
  };

  const { getByText, getByTestId } = render
    (<Modal 
      id="Mock id" 
      title="Mock title" 
      body={<BookView book={mockBook}/>} 
    />);
  const modal = getByTestId(/Mock id/i);
  const title = getByText(/Mock title/);
  const author = getByText(/Mock author/);
  const category = getByText(/Mock category/);
  const publicationDate = getByText(/Mock publication date/);

  expect(modal).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(publicationDate).toBeInTheDocument();
  expect(document.querySelector("img").getAttribute("src")).toBe("Mock image url");
});