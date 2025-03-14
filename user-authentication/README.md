# User Authentication Form

This project implements a simple login form with client-side validation for email and password fields. After successful authentication, users can add new users to the application (simulated). The application is built using HTML, CSS, and JavaScript.

## Features
- **Login Form**: Includes email and password fields with validation.
  - Email must be in a valid format (e.g., `user@example.com`).
  - Password must be at least 6 characters long.
- **Simulated Authentication**: Uses hardcoded credentials (`test@example.com` and `password123`) to simulate a successful login.
- **Add User Form**: Appears after successful login, allowing the addition of new users (simulated—no actual storage).

## Setup and Execution
1. **Clone or Download** the project files to your local machine.
2. **Open** the `index.html` file in a web browser (e.g., Chrome, Firefox).
   - No server or additional setup is required, as this is a static webpage.

## How to Test
1. **Login Form**:
   - Enter an invalid email (e.g., `test`) or a password shorter than 6 characters to see validation errors.
   - Use the credentials `test@example.com` and `password123` to log in successfully.
2. **Add User Form**:
   - After logging in, the "Add New User" form will appear.
   - Enter any email and password to simulate adding a new user. A success message will confirm the action.

## Notes
- This is a frontend-only implementation with simulated authentication and user addition.
- In a real-world application, authentication and user management would involve a backend server and database.
- The project can be extended with features like stronger password validation or temporary user storage using local storage.

## Source Code
The source code is organized as follows:
- `index.html`: Contains the HTML structure.
- `styles.css`: Contains the CSS styling.
- `script.js`: Contains the JavaScript logic for validation and interaction.