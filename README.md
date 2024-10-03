
# MERN Chat Application 💬

Welcome to the **MERN Chat App**, a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and **Socket.io** for live communication. This app allows users to engage in real-time messaging with a sleek and responsive UI.

You can check the live app here 👉 [Chat App](https://chat-deployed-rfpr.onrender.com)

## Features

- **Real-time Communication**: Powered by **Socket.io** for fast, real-time message exchanges between users.
- **Authentication**: Secure user authentication using JWT (JSON Web Token) and cookies.
- **Responsive Design**: Built with **Daisy UI**, ensuring a mobile-friendly and intuitive user experience.
- **Message History**: Persist chat messages with MongoDB for users to see their chat history.
- **Deployment**: Deployed on **Render** for easy and accessible web hosting.

## Technologies Used

- **Frontend**: React, Daisy UI, CSS
- **Backend**: Node.js, Express
- **Real-time Messaging**: Socket.io
- **Database**: MongoDB
- **Authentication**: JWT, Cookies
- **Deployment**: Render

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- MongoDB (or use MongoDB Atlas for cloud hosting)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install server dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**:
   ```bash
   cd client
   npm install
   ```

4. **Environment Variables**:
   Create a `.env` file in the `server` folder and add your MongoDB URI and JWT secret:
   ```
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret>
   ```

5. **Run the app**:

   Start the backend server:
   ```bash
   cd server
   npm run dev
   ```

   Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

### Usage

- Open the app in your browser (by default, it will run on `http://localhost:3000`).
- Create an account or log in.
- Start chatting in real-time!

## Screenshots

![Chat App UI](https://chat-deployed-rfpr.onrender.com/path-to-your-screenshot.png)

## Contributing

Feel free to submit issues or pull requests to help improve the project.

## License

This project is licensed under the MIT License.
