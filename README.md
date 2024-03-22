# Expatswap User Management Module

Expatswap User Management Module is a web application developed for managing user data. It allows users to create new accounts and view a paginated table of existing users. This project is built using Node.js for the backend, Next.js for the frontend, JWT Auth for authentication and MongoDB as the database.

## Features

- User creation: Allows users to create new accounts with their personal information including first name, last name, phone number, email, password, and date of birth.
- User table: Displays a paginated table of existing users, showing their first name, last name, phone number, email, and date of birth.
- Client-side validation: Provides client-side validation for email format and password requirements during user creation.
- Responsive design: The application is responsive and works well on both desktop and mobile devices.

## Demo
![expatSwap4](https://github.com/Remi-dee/expatswap/assets/96704300/f221c202-c98d-4a48-a804-3f706b7862a7)

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
![image](https://github.com/Remi-dee/expatswap/assets/96704300/77099e8e-0796-47a8-8f84-490ebb3f3a2f)



### Users Table
![image](https://github.com/Remi-dee/expatswap/assets/96704300/c50f8709-5215-4ade-8260-13de19555654)


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
      

