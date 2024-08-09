# News Explorer: Back End


## Features
- User Authentication: Secure user registration and login functionality using JWT (jsonwebtoken).
- Password Hashing: Passwords are securely hashed using bcrypt.
- Sawe Liken Artickles and delete tham from the list
- Error Handling: Proper error messages and status codes for invalid requests or server errors.


## Technologies Used
### - Backend:
  - Node.js
  - Express.js
  - Mongoose (MongoDB)
### - Tools:
  - Postman (for API testing)
  - MongoDB Atlas (for database hosting)

## API Endpoints
### Auth Routes
- `POST /signup` : Registers a new user
- `POST /signin` : Authenticates a user and returns a JWT token

### User Routes
- 'GET /users/me' : Returns current user 
- 'PATCH /users/me' : Update current user

### Clothing Item Routes
- 'GET /items' : Returns all clothing items
- 'POST /items' : Creates a new clothing item
- 'PUT /items/:id' : Updates an existing clothing item
- 'DELETE /items/:id' : Deletes a clothing item by _id

### Like/Dislike Routes
- 'PUT /items/:id/likes' : Likes a clothing item
- 'DELETE /items/:id/likes' : Dislikes a clothing item

## Usage
1. Use Postman or any other API testing tool to interact with the API.
2. Register a new user via POST /signup.
3. Authenticate the user via POST /signin to receive a JWT token.
4. Use the JWT token in the Authorization header to access protected routes.

## Links
 - [Back End](http://api.marconi.cow.mooo.com/)
