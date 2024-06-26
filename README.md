
```markdown
# Tellers

Welcome to the Collaborative Story Writing Platform! This project allows users to collaboratively write and edit stories in real-time. Users can contribute to stories, provide feedback, and view previous versions of each story.


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization with JWT
- Real-time collaborative editing using WebSockets (Socket.io)
- Version control for tracking and reverting changes
- Categorization and tagging of stories
- Commenting and feedback system for contributions
- Email notifications for updates and comments
- Admin dashboard for monitoring and managing users and stories

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - TypeScript
  - WebSockets (Socket.io)
  - JWT for authentication and authorization
  - Mongoose for MongoDB schema modeling

- **Frontend:** (Only in the future)
  - React.js
  - TypeScript
  - Redux or Context API for state management
  - Socket.io-client for real-time updates

- **Other:**
  - Docker for containerization
  - Jest for testing
  - ESLint and Prettier for code quality and formatting
  - SendGrid  for email notifications

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/rason-developer/Tellers
    cd Tellers/Server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory(Server directory) and add the following:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    SERVER_PORT= Your server port
    EMAIL_API_KEY=your_sendgrid_api_key
    ```

4. Start the server:
    ```sh
    npm run dev or npm start
    ```

5. (Optional) To run the project with Docker:
    ```sh
    docker-compose up
    ```

## Usage Test BackEnd

- Go to https://www.postman.com/
- Sign up and create a new workspace.
- Use the endpoints.txt in docs to guide trough the multiple endpoints.
- To test the websocket you need to install wscat
- Then establish a connection with wscat -c ws://localhost:PORT

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please make sure your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance!
```
