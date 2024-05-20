# Simple Social Media App

A simple social media application built with React and Node.js. Users can create posts, like posts, and add comments to posts.

## Features

- Create new posts with text content and optional file attachments (images/videos).
- View a list of recent posts.
- Like posts.
- Add comments to posts.
- Responsive design.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Storage**: Multer for handling file uploads

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- bun
- MongoDB

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/simple-social-media-app.git
    cd simple-social-media-app
    ```

2. Install dependencies for the backend:

    ```sh
    cd backend
    bun install
    ```

3. Install dependencies for the frontend:

    ```sh
    cd ../frontend
    bun install
    ```

### Configuration

1. Create a `.env` file in the `backend` directory with the following content:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/socialmedia
    PORT=5000
    ```

2. Make sure MongoDB is running:

    ```sh
    mongod
    ```

### Running the Application

1. Start the backend server:

    ```sh
    cd backend
    bun run dev
    ```

2. Start the frontend development server:

    ```sh
    cd ../frontend
    bun run dev
    ```

3. Open your browser and go to `http://localhost:5173`

## API Endpoints

### Posts

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `POST /api/posts/like/:id` - Like a post
- `POST /api/posts/comment/:id` - Add a comment to a post

