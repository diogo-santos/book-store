# Books API
Rest service for Book domain

Check API documentation at https://spring-book-api.herokuapp.com/swagger-ui.html

## Getting the code on your computer
- [ ] Java 8
- [ ] Maven 3
- [ ] Import the project from GitHub https://github.com/diogo-santos/book-store

Run the app
```
cd books-api
mvn spring-boot:run
```

Execute tests
```
mvn clean package
```

## Test the App
Check API documentation at http://localhost:8080/swagger-ui.html


#### What I have developed
- [ ] GetAllBooks endpoint with pagination e.g. GET http://localhost:8080/books?pageNumber=1&pageSize=5&sortBy=author
- [ ] GetBookById endpoint e.g. GET http://localhost:8080/books/1
- [ ] DeleteBook endpoint e.g. DELETE http://localhost:8080/books/1
- [ ] Integrated tests using MockMvc
- [ ] Code coverage above 90% 
- [ ] Add api documentation using swagger

#### Design decisions
- [ ] Leveraging PagingAndSortingRepository for easy pagination implementation
- [ ] Returning Interface-Based Projections from the repository to avoid entity class being exposed 
- [ ] Adding resilience to getAllBooks by setting default parameter if not provided 

#### TODO
- [ ] Add a docker MySQL instead of H2
- [ ] Add api token
