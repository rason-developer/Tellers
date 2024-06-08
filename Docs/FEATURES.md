# Tellers

## User Authentication
- **Sign Up**: Users can create a new account by providing a username, email, and password.
- **Log In**: Users can log in using their email and password.
- **Password Recovery**: Users can recover their password using their registered email.

## User Profiles
- **View Profile**: Users can view their own and others' profiles.
- **Edit Profile**: Users can update their profile information, including username and email.

## Story Management
- **Create Story**: Users can create a new story by providing a title, description, and initial content.
- **View Stories**: Users can view a list of all stories.
- **View Story Details**: Users can view the details of a specific story, including its content and contributions.
- **Update Story**: Users can update the story they created.
- **Delete Story**: Users can delete the story they created.

## Collaborative Editing
- **Real-Time Editing**: Multiple users can collaboratively edit a story in real-time.
- **Track Changes**: Users can see changes made by other contributors in real-time.

## Contributions
- **Add Contribution**: Users can add contributions to a story.
- **View Contributions**: Users can view all contributions to a story.
- **Update Contribution**: Users can update their own contributions.
- **Delete Contribution**: Users can delete their own contributions.

## Comments
- **Add Comment**: Users can add comments to contributions.
- **View Comments**: Users can view all comments on a contribution.
- **Delete Comment**: Users can delete their own comments.

## Notifications
- **Receive Notifications**: Users receive notifications for story updates, new contributions, and comments.
- **View Notifications**: Users can view a list of all their notifications.

## Administration
- **Manage Users**: Admin users can view, update, and delete user accounts.
- **Assign Roles**: Admin users can assign roles to users (e.g., admin, contributor).

## WebSocket Features
- **Join Room**: Users join a WebSocket room corresponding to the story they are editing.
- **Leave Room**: Users leave the WebSocket room when they are done editing.
- **Send Changes**: Users send their changes to the story in real-time.
- **Receive Changes**: Users receive changes made by other contributors in real-time.
- **Error Handling**: Real-time error handling and notifications for WebSocket events.

## Security
- **JWT Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Input Validation**: Validate user inputs to prevent SQL injection and other attacks.
- **Password Hashing**: Secure password storage using bcrypt.

## Miscellaneous
- **Error Handling**: Comprehensive error handling for both synchronous and asynchronous operations.
- **Logging**: Log important events and errors for debugging and monitoring.
