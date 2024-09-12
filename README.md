# Social Media Backend

This is a backend for a social media application built with Node.js, Express, and MongoDB. It features user authentication, post creation, likes, comments, and more.

## Features

- User signup and login (JWT authentication)
- Create, update, and delete posts
- Comment and like posts
- Update and delete comments
- Protected routes for authenticated users
- Upload user profile picture to AWS S3
- API documentation with Swagger

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password hashing
- Swagger for API documentation
- AWS S3 for image storage
- Multer for handling file uploads

## Requirements

- Node.js (v18 or higher)
- MongoDB
- npm (v8 or higher)
- AWS S3 account (for image storage)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hichri-louay/intedgroup-social-media-backend.git
cd intedgroup-social-media-backend
```

2. Install dependencies:

```bash
npm install
```

3.Create a .env file in the root directory with the following variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
SALT=your_bcrypt_salt
JWT_SECRET=your_jwt_secret_key
EXPIRE_IN=your_expires_in
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_s3_bucket_region
AWS_BUCKET_NAME=your_aws_s3_bucket_name
```

4. Run server:
```bash
npm run dev
```

The server will run on http://localhost:5000.


## API Documentation

You can access the API documentation at http://localhost:5000/docs once the server is running.
