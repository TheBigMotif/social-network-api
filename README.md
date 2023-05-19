# social-network-api

## Requirements

To run the API, you need to have the following installed:

Node.js (version 16 or higher)
MongoDB
Insomnia or postman for testing.

## Installation

Clone the repository or download the source code.
Navigate to the project directory.
Run npm install to install the required dependencies.

## Configuration

Before running the API, you need to configure the database connection. Follow these steps:

DB_CONNECTION_URL: The connection URL for your MongoDB instance.
Usage
To start the API, run the following command:

npm start
The API will be running at http://localhost:3001.

API Endpoints
The following are the available API endpoints:

### Users

GET /users: Retrieve a list of all users.
GET /users/:userId: Retrieve a specific user by ID.
POST /users: Create a new user.
PUT /users/:userId: Update a user by ID.
DELETE /users/:userId: Delete a user by ID.

### Thoughts

GET /thoughts: Retrieve a list of all thoughts.
GET /thoughts/:thoughtId: Retrieve a specific thought by ID.
POST /thoughts: Create a new thought.
PUT /thoughts/:thoughtId: Update a thought by ID.
DELETE /thoughts/:thoughtId: Delete a thought by ID.

### Reactions

GET /thoughts/:thoughtId/reactions: Retrieve all reactions for a specific thought.
POST /thoughts/:thoughtId/reactions: Create a new reaction for a thought.
DELETE /thoughts/:thoughtId/reactions/:reactionId: Delete a reaction for a thought.

### Friend List

GET /users/:userId/friends: Retrieve the friend list for a specific user.
POST /users/:userId/friends: Add a user to the friend list of another user.
DELETE /users/:userId/friends/:friendId: Remove a user from the friend list of another user.
Models
The API uses the following models:

### User

\_id: The unique identifier for the user.
username: The username of the user.
email: The email address of the user.
createdAt: The timestamp when the user was created.
updatedAt: The timestamp when the user was last updated.
Thought
\_id: The unique identifier for the thought.
userId: The ID of the user who posted the thought.
content: The content of the thought.
createdAt: The timestamp when the thought was created.
updatedAt: The timestamp when the thought was last updated.

### Reaction

\_id: The unique identifier for the reaction.
thoughtId: The ID of the thought the reaction is for.
userId: The ID of the user who reacted.
type: The type of reaction (e.g., "like", "love", "haha").
createdAt: The timestamp when the reaction was created.
updatedAt: The timestamp when the reaction was last updated.

## Source and Special Thanks

Base code provided by Tec de Monterrey and edX.
Special thanks to central graders who continually help students with
their projects.

## Status

This project is unfinished. Several things can be done, feel free to fork it and tweak it
for your needs.
