# Expatswap User Management Module

Expatswap User Management Module is a web application developed for managing user data. It allows users to create new accounts and view a paginated table of existing users. This project is built using Node.js for the backend, Next.js for the frontend, JWT Auth for authentication and MongoDB as the database.
### [Visit App](https://expatswap-brown.vercel.app/)

## Features

- [x] User creation: Allows users to create new accounts with their personal information including first name, last name, phone number, email, password, and date of birth.
- [x] User table: Displays a paginated table of existing users, showing their first name, last name, phone number, email, and date of birth.
- [x] Filter User's Data: Allow users to filter the list of users by a range of date of birth. For instance, allow users to filter and view all users whose date of birth falls between a specified range (e.g., 1st Jan 2001 and 1st Jan 2006).
- [x] Client-side validation: Provides client-side validation for email format and password requirements during user creation.
- [x] Responsive design: The application is responsive and works well on both desktop and mobile devices.

## Demo
### Filter Users' Data
![expatSwap5](https://github.com/Remi-dee/expatswap/assets/96704300/5f6d3321-2bfc-4d42-a4de-6cb073411331)

## Validation
![expatSwap3](https://github.com/Remi-dee/expatswap/assets/96704300/8c322afa-a6a4-4e7e-892d-b83dcf1f81f5)


## Expatswap Database Structure and View(Mongo Db)
![expatSwap2](https://github.com/Remi-dee/expatswap/assets/96704300/55b0d3bc-9af5-4790-801e-4f45bdc1f0e5)


## Technologies Used

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JWT auth
- Frontend:
  - Next.js
  - React.js
  - Tailwind CSS
 

## Screenshots

### Create User
![image](https://github.com/Remi-dee/expatswap/assets/96704300/92971b6d-8697-4b46-8a8f-62c314e8b616)




### Users Table
![image](https://github.com/Remi-dee/expatswap/assets/96704300/118c686f-396f-48a9-83ff-819906e426bc)



## Setup

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/expatswap-user-management.git`
2. Navigate to the project directory: `cd expatswap`
3. Install dependencies:
   ```bash
   # Install backend dependencies
   cd api
   npm install

   # Install frontend dependencies
   cd ../client
   npm install

   # Create a .env file in the backend directory and add the following variables:

   NODE_ENV = development
   PORT = 5000
   MONGO_URI = your_mongodb_uri
   JWT_SECRET = your JWT token
      

