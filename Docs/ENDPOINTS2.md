
```markdown
# API Endpoints

This document outlines the API endpoints and WebSocket events for the Tellers Platform.

## REST API Endpoints

### Authentication

#### Register a new user
- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": { ... }
  }
  ```

#### Login a user
- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token",
    "user": { ... }
  }
  ```

### User Management

#### Get user profile
- **URL:** `/api/users/me`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "user": { ... }
  }
  ```

#### Update user profile
- **URL:** `/api/users/me`
- **Method:** `PUT`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Profile updated successfully",
    "user": { ... }
  }
  ```

### Stories

#### Create a new story
- **URL:** `/api/stories`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "title": "string",
    "description": "string",
    "category": "string",
    "tags": ["string"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Story created successfully",
    "story": { ... }
  }
  ```

#### Get all stories
- **URL:** `/api/stories`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "stories": [{ ... }]
  }
  ```

#### Get a single story
- **URL:** `/api/stories/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "story": { ... }
  }
  ```

#### Update a story
- **URL:** `/api/stories/:id`
- **Method:** `PUT`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "title": "string",
    "description": "string",
    "category": "string",
    "tags": ["string"]
  }
  ```
- **Response:**
  ```json
  {
    "message": "Story updated successfully",
    "story": { ... }
  }
  ```

#### Delete a story
- **URL:** `/api/stories/:id`
- **Method:** `DELETE`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Story deleted successfully"
  }
  ```

### Contributions

#### Add a new contribution
- **URL:** `/api/stories/:id/contributions`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "content": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Contribution added successfully",
    "contribution": { ... }
  }
  ```

#### Get all contributions for a story
- **URL:** `/api/stories/:id/contributions`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "contributions": [{ ... }]
  }
  ```

### Comments

#### Add a new comment
- **URL:** `/api/contributions/:id/comments`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "content": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Comment added successfully",
    "comment": { ... }
  }
  ```

#### Get all comments for a contribution
- **URL:** `/api/contributions/:id/comments`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "comments": [{ ... }]
  }
  ```

### Notifications

#### Get all notifications
- **URL:** `/api/notifications`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "notifications": [{ ... }]
  }
  ```

### Admin

#### Get all users (Admin only)
- **URL:** `/api/admin/users`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "users": [{ ... }]
  }
  ```

#### Update user role (Admin only)
- **URL:** `/api/admin/users/:id`
- **Method:** `PUT`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "role": "string" // Possible values: "user", "editor", "admin"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User role updated successfully",
    "user": { ... }
  }
  ```

## WebSocket Events

### Connection

#### Connect to WebSocket
- **Event:** `connection`
- **Payload:**
  ```json
  {
    "message": "Connected to WebSocket"
  }
  ```

### Real-time Collaborative Editing

#### Join a story room
- **Event:** `joinRoom`
- **Payload:**
  ```json
  {
    "storyId": "string"
  }
  ```

#### Leave a story room
- **Event:** `leaveRoom`
- **Payload:**
  ```json
  {
    "storyId": "string"
  }
  ```

#### Send changes
- **Event:** `sendChanges`
- **Payload:**
  ```json
  {
    "storyId": "string",
    "changes": "string"
  }
  ```

#### Receive changes
- **Event:** `receiveChanges`
- **Payload:**
  ```json
  {
    "storyId": "string",
    "changes": "string"
  }
  ```

### Notifications

#### Receive notification
- **Event:** `notification`
- **Payload:**
  ```json
  {
    "message": "string",
    "data": { ... }
  }
  ```

### Errors

#### Error handling
- **Event:** `error`
- **Payload:**
  ```json
  {
    "message": "string"
  }
  ```

---

This document provides a comprehensive overview of the API endpoints and WebSocket events for the Tellers Platform. Feel free to reach out if you have any questions or need further assistance!
```

This `ENDPOINTS.md` document covers the following:

1. **Authentication:** Endpoints for user registration and login.
2. **User Management:** Endpoints for retrieving and updating user profiles.
3. **Stories:** Endpoints for creating, retrieving, updating, and deleting stories.
4. **Contributions:** Endpoints for adding and retrieving story contributions.
5. **Comments:** Endpoints for adding and retrieving comments on contributions.
6. **Notifications:** Endpoints for retrieving notifications.
7. **Admin:** Endpoints for admin-specific actions, such as retrieving all users and updating user roles.
8. **WebSocket Events:** Events for real-time collaborative editing, notifications, and error handling.

