import React from 'react';
import { render } from '@testing-library/react';

import Title from "../Title";

test("renders title component", () => {

  const { getByText } = render(<Title title="Mock title" />);
  const title = getByText(/Mock title/);

  expect(title).toBeInTheDocument();
});