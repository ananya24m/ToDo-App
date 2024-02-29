# ToDo-App
A simple and efficient backend for a TODO app, providing RESTful APIs for managing tasks and users.


## Features

- Create,Read,Update and Delete tasks
- User Authentication and Authorization
- Secure Password Hashing
- Database storage for task and user information


## Tech Stack

- Node.js
- Express.js
- MongoDB
- Passport.js


## Installation

Clone the repository:

```bash
   git clone https://github.com/ananya24m/ToDo-App
```
Install dependencies :

```bash
  npm install
``` 
Run the server :

```bash
  npm run start
```  
- Access the API at http://localhost:5000  
## Usage/Examples

# Task Management

- Create a new todo : POST /api/save
- Get all todos: POST /api/get
- Update a todo: PUT /api/update/:todoId
- Delete a todo: DELETE /api/delete/:todoId

# User Management

- Create a new user : POST /auth/register
- Login : POST /auth/Login
- Logout : POST/auth/logout
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` : The port in which project will run.

`MONGO_URI` : MongoDB connection URI.

`SESSION_SECRET` : secret key for passport session.

