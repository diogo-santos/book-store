const API_URL = 'http://localhost:8080/books';

export async function getBooks(pageNumber, pageSize, sortBy) {
  const url = `${API_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}`
  const response = await fetch(url)
  
  return response;
}

export async function deleteBook(id) {
  const url = `${API_URL}/${id}`;
  const response = await fetch(url, { method: 'DELETE' });

  return response;
}