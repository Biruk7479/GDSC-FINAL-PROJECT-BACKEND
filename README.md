# Car Rental Website

This project is the backend for a full-stack car rental website. It features user authentication, role-based access control, and CRUD operations for cars and bookings. The backend is built using Node.js, Express.js, and MongoDB.

## How to Navigate the Website

Follow these steps to explore the features of the car rental website:

### Step 1: Sign Up and Login

1. **Access the Website**:
   - Open the homepage of the car rental website.
   - Click on the "Join Us" button or the "Login/Signup" button located in the navigation bar.

2. **Sign Up**:
   - On the signup page, create a new account by providing your name, email, and password.
   - For admin access, you can use the following credentials:
     - **Name**: John
     - **Email**: john@gmail.com
     - **Password**: admin123
     
   - Complete the signup process to create your account.

3. **Login**:
   - After signing up, log in with the credentials you just created.
   - Enter your email and password, then click on the "Login" button to access the website.

### Step 2: Explore Cars and Rent a Car (User Role)

1. **Explore Cars**:
   - If logged in as a user, click on the "Explore" link in the navigation bar.
   - This will take you to the page where all available cars in the database are displayed.

2. **Rent a Car**:
   - Choose a car you want to rent and click on it to see more details.
   - Select the **pickup location** and **return location** from the provided options.
   - Choose the **start date** and **end date** using the calendar icon.
   - The website will automatically calculate the total number of rental days and the cost for the rental period.
   - After reviewing the details, confirm your rental booking.

3. **Booking Confirmation**:
   - Once confirmed, your rental will be added to the booking database.
   - You can view your bookings from the "Bookings" section in the header, which is accessible to admins.

### Step 3: Post and Manage Cars (Admin Role)

1. **Post a Car**:
   - If logged in as an admin, click on the "Post Car" button located in the top-right corner of the page.
   - Fill in the following details to add a new car to the database:
     - **Make**: The car's brand.
     - **Model**: The car's model.
     - **Category**: The car's category (e.g., SUV, Sedan).
     - **Price for 3 days**: The rental price for three days.
     - **Availability**: The car's availability status.
     - **Location**: The location where the car is available.
     - **Image URL**: A URL link to the car's image.
     - **Seats**: The number of seats in the car.
     - **Transmission**: The car's transmission type (e.g., Automatic, Manual).
   - Submit the form to add the car to the database.

2. **Manage Cars**:
   - Return to the "Explore Cars" page to see the car you just posted.
   - As an admin, you can manage cars by pressing the three dots on the car's card.
   - This allows you to **update** or **delete** the car listing.

3. **Rent Management**:
   - The three-dot menu also lets you manage rent bookings for users, including updating or deleting a booking.
   - Bookings can be found in the header of the HTML page, and currently, they can be deleted and displayed by admins.

### Step 4: Viewing All Cars (User or Admin Role)

1. **Explore All Cars**:
   - On the "Explore" page, you can view all cars available in the database.
   - Both users and admins can see the complete list of cars and interact with them based on their role.

By following these steps, you can fully experience the functionality offered by the car rental website, whether as a user or an admin.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Backend Dependencies](#backend-dependencies)
- [API Routes](#api-routes)
- [Middleware](#middleware)
- [Installation](#installation)
- [Usage](#usage)
- [Improvements](#improvements)

## Project Overview

This backend manages user authentication, car listings, and booking operations, all secured with JSON Web Tokens (JWT) and role-based access control. It also includes middleware for authorization, ensuring only users with appropriate roles can access specific routes.

## Technology Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user, car, and booking data.
- **JWT**: JSON Web Tokens for secure user authentication.
- **Nodemon**: Development tool that automatically restarts the server on code changes.

## Backend Dependencies

- **bcrypt**: Hashes passwords for secure storage.
- **cors**: Manages cross-origin resource sharing.
- **dotenv**: Loads environment variables from a .env file.
- **express**: Manages server-side routes and middleware.
- **jsonwebtoken**: Handles secure user authentication.
- **mongoose**: Provides a schema-based solution to model data.
- **nodemon**: Automatically restarts the server on file changes during development.

## API Routes

### Authentication Routes (`authroutes.js`)

- **POST /signup**: Register a new user.
- **POST /login**: Authenticate and login a user.

### Booking Routes (`bookingroutes.js`)

- **GET /**: Retrieve all bookings (requires Admin role).
- **GET /:id**: Retrieve a booking by ID (requires Admin role).
- **POST /**: Create a new booking (requires User or Admin role).
- **PATCH /:id**: Update an existing booking (requires Admin role).
- **DELETE /:id**: Delete a booking (requires Admin role).

### Car Routes (`carroutes.js`)

- **GET /**: Retrieve all cars.
- **GET /:id**: Retrieve a car by its ID.
- **POST /**: Create a new car listing (requires Admin role).
- **PATCH /:id**: Update an existing car listing (requires User or Admin role).
- **DELETE /:id**: Delete a car listing (requires User or Admin role).

## Middleware

### Authorization Middleware (`middleware.js`)

The `middleware.js` middleware is used to protect routes by verifying the JWT token and ensuring the user has the correct role to access the route.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Biruk7479/GDSC-FINAL-PROJECT-BACKEND.git
   git clone https://github.com/Biruk7479/GDSC-FINAL-PROJECT-FRONTEND.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
   JWT_SECRET=MIHcAgEBBEIBRJ2DtMGLW1UgaePbfJzDLBKgaU7UHGbW4vKs6Sbw74RwrHa1jaOct8SjF30PuTmxUAQ9rwsxbhHGftpGLr6B3rCgBwYFK4EEACOhgYkDgYYABABIyh/n21bPwyY1SmWgbOKtx79ACHVninmRl0BKtuISChX40mmA3c3gX0Ck3pnPdaE40EskFtrwAXV7Qgh8nAAGuADj0BEOIvs4I4UJpknZn0PTln1mUCq0Pn84CbSq6AvJYxAh5LAvz+LsX9/eQERW+/NSYcAxuh1utalvr9+WuWa/
   MONGO_URI=mongodb+srv://biruk7479:pinvjkskvcsdj@clusterforcrw.2igmg.mongodb.net/?retryWrites=true&w=majority&appName=ClusterForCRW

   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:8745` for running it locally.

## Improvements

While the current version of the website provides essential features, several improvements can be made:

1. **Multiple Admins**:
   - We could enable multiple users to have admin access.
   - Each admin could manage their own cars with full administrative functionalities, similar to the current admin role.

2. **Booking Management**:
   - Future updates could include the ability for admins to accept or decline bookings, adding another layer of control and interaction with the users.

**UI Design**:
   - The design of the website is inspired by the Ridex car rental GitHub repository, providing a polished and user-friendly interface.

