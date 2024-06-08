# Tellers

## User Authentication
- **Sign Up**: Users can create a new account by providing a username, email, and password.
  - **Endpoint**: `POST /api/auth/signup`
- **Log In**: Users can log in using their email and password.
  - **Endpoint**: `POST /api/auth/login`
- **Password Recovery**: Users can recover their password using their registered email.
  - **Endpoint**: `POST /api/auth/recover`

## User Profiles
- **View Profile**: Users can view their own and others' profiles.
  - **Endpoint**: `GET /api/users/:id`
- **Edit Profile**: Users can update their profile information, including username and email.
  - **Endpoint**: `PUT /api/users/:id`

## Story Management
- **Create Story**: Users can create a new story by providing a title, description, and initial content.
  - **Endpoint**: `POST /api/stories`
- **View Stories**: Users can view a list of all stories.
  - **Endpoint**: `GET /api/stories`
- **View Story Details**: Users can view the details of a specific story, including its content and contributions.
  - **Endpoint**: `GET /api/stories/:id`
- **Update Story**: Users can update the story they created.
  - **Endpoint**: `PUT /api/stories/:id`
- **Delete Story**: Users can delete the story they created.
  - **Endpoint**: `DELETE /api/stories/:id`

## Collaborative Editing
- **Real-Time Editing**: Multiple users can collaboratively edit a story in real-time.
  - **Endpoint**: `WebSocket /ws/join`, `WebSocket /ws/leave`, `WebSocket /ws/send`, `WebSocket /ws/receive`
- **Track Changes**: Users can see changes made by other contributors in real-time.
  - **Endpoint**: `WebSocket /ws/send`, `WebSocket /ws/receive`

## Contributions
- **Add Contribution**: Users can add contributions to a story.
  - **Endpoint**: `POST /api/stories/:storyId/contributions`
- **View Contributions**: Users can view all contributions to a story.
  - **Endpoint**: `GET /api/stories/:storyId/contributions`
- **Update Contribution**: Users can update their own contributions.
  - **Endpoint**: `PUT /api/contributions/:id`
- **Delete Contribution**: Users can delete their own contributions.
  - **Endpoint**: `DELETE /api/contributions/:id`

## Comments
- **Add Comment**: Users can add comments to contributions.
  - **Endpoint**: `POST /api/contributions/:contributionId/comments`
- **View Comments**: Users can view all comments on a contribution.
  - **Endpoint**: `GET /api/contributions/:contributionId/comments`
- **Delete Comment**: Users can delete their own comments.
  - **Endpoint**: `DELETE /api/comments/:id`

## Notifications
- **Receive Notifications**: Users receive notifications for story updates, new contributions, and comments.
  - **Endpoint**: `WebSocket /ws/receive`
- **View Notifications**: Users can view a list of all their notifications.
  - **Endpoint**: `GET /api/notifications`

## Administration
- **Manage Users**: Admin users can view, update, and delete user accounts.
  - **Endpoint**: `GET /api/admin/users`, `PUT /api/users/:id`, `DELETE /api/users/:id`
- **Assign Roles**: Admin users can assign roles to users (e.g., admin, contributor).
  - **Endpoint**: `PUT /api/admin/users/:id/role`

## WebSocket Features
- **Join Room**: Users join a WebSocket room corresponding to the story they are editing.
  - **Endpoint**: `WebSocket /ws/join`
- **Leave Room**: Users leave the WebSocket room when they are done editing.
  - **Endpoint**: `WebSocket /ws/leave`
- **Send Changes**: Users send their changes to the story in real-time.
  - **Endpoint**: `WebSocket /ws/send`
- **Receive Changes**: Users receive changes made by other contributors in real-time.
  - **Endpoint**: `WebSocket /ws/receive`
- **Error Handling**: Real-time error handling and notifications for WebSocket events.
  - **Endpoint**: `WebSocket /ws/error`

## Security
- **JWT Authentication**: Secure user authentication using JSON Web Tokens (JWT).
  - **Implemented in**: `/api/auth/signup`, `/api/auth/login`
- **Input Validation**: Validate user inputs to prevent SQL injection and other attacks.
  - **Implemented in**: All endpoints
- **Password Hashing**: Secure password storage using bcrypt.
  - **Implemented in**: `POST /api/auth/signup`

## Miscellaneous
- **Error Handling**: Comprehensive error handling for both synchronous and asynchronous operations.
  - **Implemented in**: All endpoints
- **Logging**: Log important events and errors for debugging and monitoring.
  - **Implemented in**: All endpoints
```