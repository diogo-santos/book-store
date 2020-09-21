# REACTJS Book Store
Display Books through REST call to books-api

## Getting the code on your computer
- [ ] Download and install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
- [ ] Download the project or clone it from https://github.com/diogo-santos/book-store
```
cd reactjs-book-store
echo "REACT_APP_API_URL=http://localhost:8080/books" >> .env.local
echo "REACT_APP_GOOGLE_BOOKS_API_URL=https://www.googleapis.com/books/v1/volumes?q=" >> .env.local
```
```
npm install
npm start
```

#### What I have developed
- [ ] Fetch all books
- [ ] Pagination component
- [ ] Delete Book
- [ ] View Book
- [ ] Sort dropdown
- [ ] Items per page dropdown
- [ ] Testing components with react test library

#### TODO
- [ ] Add tests for component actions
- [ ] Add api token
- [ ] Caching fetched results
- [ ] Loading animation

