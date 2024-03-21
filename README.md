
 
 
# Expatswap User Management Module

Expatswap User Management Module is a web application developed for managing user data. It allows users to create new accounts and view a paginated table of existing users. This project is built using Node.js for the backend, Next.js for the frontend, and MongoDB as the database.

## Features

- User creation: Allows users to create new accounts with their personal information including first name, last name, phone number, email, password, and date of birth.
- User table: Displays a paginated table of existing users, showing their first name, last name, phone number, email, and date of birth.
- Client-side validation: Provides client-side validation for email format and password requirements during user creation.
- Responsive design: The application is responsive and works well on both desktop and mobile devices.

## Technologies Used

- Backend:
  - Node.js
  - Express.js
  - MongoDB
- Frontend:
  - Next.js
  - React.js
  - Tailwind CSS

## Setup

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/expatswap-user-management.git`
2. Navigate to the project directory: `cd expatswap-user-management`
3. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
