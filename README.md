# Canvas Community Gallery

A full-stack photo sharing app where users can upload an image, add a caption, and view a live community feed. The backend stores post metadata in MongoDB and uploads images to ImageKit, while the frontend is a React + Vite app for creating and browsing posts.

## Features

- Upload images with captions
- Store post URL and caption in MongoDB
- Fetch and display recent posts in a gallery feed
- Modern React frontend with routing
- Backend API built with Express.js
- Image hosting via ImageKit

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer for multipart uploads
- ImageKit Node SDK
- dotenv for environment configuration

### Frontend
- React
- Vite
- React Router
- Axios
- Tailwind CSS

## Project Structure

```text
complete-backend/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.js
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   └── package-lock.json
├── fronted/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── README.md
└── .git
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running or a MongoDB connection string available
- An ImageKit account and valid private key

## Environment Setup

1. Open the backend folder:

```bash
cd backend
```

2. Create a `.env` file based on `.env.example`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
PORT=3000
IMAGE_PRIVATE_KEY=your_image_key
```

> Note: The app currently uses `IMAGE_PRIVATE_KEY` for ImageKit uploads and `MONGO_URI` for database connectivity.

## Running the Application

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend starts on:

```text
http://localhost:3000
```

### Frontend

Open a second terminal and run:

```bash
cd fronted
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal (typically `http://localhost:5173`).

## API Endpoints

### Create a post

```http
POST /create-post
```

Request body:
- `image`: image file upload
- `caption`: text caption

### Get all posts

```http
GET /posts
```

Returns the most recently created posts first.

## Usage

1. Open the frontend in the browser.
2. Navigate to the create post page.
3. Choose an image and enter a caption.
4. Submit the form.
5. View the new post in the feed.

## Notes

- The frontend uses `VITE_API_BASE_URL` if set; otherwise it defaults to `http://localhost:3000`.
- Ensure your MongoDB connection string is valid before starting the backend.
- ImageKit credentials must be configured correctly or image uploads will fail.

## License

This project is currently unlicensed unless otherwise specified by the repository owner.
