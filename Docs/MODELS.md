

```markdown
# Data Models

## User
Stores user information.

```json
{
  "username": "string",
  "email": "string",
  "password": "string (hashed)",
  "role": "string (e.g., user, admin)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Fields
- **username**: Unique username of the user.
- **email**: Unique email address of the user.
- **password**: Hashed password for security.
- **role**: Role of the user (e.g., user, admin).
- **createdAt**: Timestamp when the user was created.
- **updatedAt**: Timestamp when the user was last updated.

### Relationships
- **Stories**: One-to-Many relationship with Story. A User can create multiple stories.
- **Contributions**: One-to-Many relationship with Contribution. A User can make multiple contributions.
- **Comments**: One-to-Many relationship with Comment. A User can post multiple comments.
- **Notifications**: One-to-Many relationship with Notification. A User can receive multiple notifications.

## Story
Stores story information.

```json
{
  "title": "string",
  "description": "string",
  "content": "string",
  "author": "ObjectId (ref: User)",
  "contributions": "Array of ObjectId (ref: Contribution)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Fields
- **title**: Title of the story.
- **description**: Brief description of the story.
- **content**: Initial content of the story.
- **author**: Reference to the User who created the story.
- **contributions**: List of contributions to the story.
- **createdAt**: Timestamp when the story was created.
- **updatedAt**: Timestamp when the story was last updated.

### Relationships
- **Author**: Many-to-One relationship with User. A Story is created by one User.
- **Contributions**: One-to-Many relationship with Contribution. A Story can have multiple contributions.

## Contribution
Stores contribution information.

```json
{
  "story": "ObjectId (ref: Story)",
  "author": "ObjectId (ref: User)",
  "content": "string",
  "comments": "Array of ObjectId (ref: Comment)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Fields
- **story**: Reference to the Story to which this contribution belongs.
- **author**: Reference to the User who made the contribution.
- **content**: Content of the contribution.
- **comments**: List of comments on the contribution.
- **createdAt**: Timestamp when the contribution was created.
- **updatedAt**: Timestamp when the contribution was last updated.

### Relationships
- **Story**: Many-to-One relationship with Story. A Contribution belongs to one Story.
- **Author**: Many-to-One relationship with User. A Contribution is made by one User.
- **Comments**: One-to-Many relationship with Comment. A Contribution can have multiple comments.

## Comment
Stores comment information.

```json
{
  "contribution": "ObjectId (ref: Contribution)",
  "author": "ObjectId (ref: User)",
  "content": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Fields
- **contribution**: Reference to the Contribution to which this comment belongs.
- **author**: Reference to the User who made the comment.
- **content**: Content of the comment.
- **createdAt**: Timestamp when the comment was created.
- **updatedAt**: Timestamp when the comment was last updated.

### Relationships
- **Contribution**: Many-to-One relationship with Contribution. A Comment belongs to one Contribution.
- **Author**: Many-to-One relationship with User. A Comment is made by one User.

## Notification
Stores notification information.

```json
{
  "user": "ObjectId (ref: User)",
  "message": "string",
  "read": "boolean",
  "createdAt": "Date"
}
```

### Fields
- **user**: Reference to the User who received the notification.
- **message**: Notification message content.
- **read**: Indicates whether the notification has been read.
- **createdAt**: Timestamp when the notification was created.

### Relationships
- **User**: Many-to-One relationship with User. A Notification is received by one User.
```
