# Book Store

## Getting the code on your computer [Books API]
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

# REACTJS Book Store
Display Books through REST call to books-api

## Getting the code on your computer [Front-end]
- [ ] Download and install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
- [ ] Download the project or clone it from https://github.com/diogo-santos/book-store
```
cd books-web
echo "REACT_APP_API_URL=http://localhost:8080/books" >> .env.local
npm install
npm start
```
