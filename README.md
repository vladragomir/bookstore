# Bookstore System

This is a TypeScript-based React application that implements a simple bookstore system with the following core features:

## Features

### Navigation and Routing

- A navigation bar with links to:
  - **Books Page**: Displays a searchable list of books available for purchase.
  - **User Profile Page**: Allows users to update their personal information.
- A **shopping cart** is always visible as a sidebar across all pages.

### Books Page

- Displays a list of books using mock data.
- Each book includes:
  - Title
  - Author
  - Price
  - Stock
  - An "Add to Cart" button.
- A **Search Bar** allows users to search books by title or author, dynamically updating the list of displayed books.
- Clicking "Add to Cart" updates the cart state, while stock is decremented accordingly.

### Shopping Cart

- Always visible as a sidebar.
- Displays:
  - List of books added to the cart.
  - Quantity of each book.
  - Total price of all items.
- Includes a "Submit" button that shows a success message upon completion.
- Users can:
  - Remove a book from the cart.
  - Adjust the quantity of books.

### User Profile Page

- A form allows users to update their:
  - First Name
  - Last Name
  - Email (with validation).
  - Date of Birth (optional).
- Dynamically renders an avatar based on the user's initials.
- Shows a success message upon successful form submission.

## Technical Choices

1. **React Functional Components and Hooks**:

   - Components are modular and reusable, with state managed using `useState` for simplicity.

2. **TypeScript**:

   - Ensures type safety across the app, reducing potential bugs.

3. **React Router**:

   - Provides seamless navigation between pages.

4. **Mock Data**:
   - Used to simulate backend functionality for book data and stock management.

## Features Not Implemented

The following features were considered but not implemented due to time constraints:

- Full integration with a backend API.
- Persistent state management using a library like Redux or Zustand.
- Unit and integration tests.
- Advanced error handling (e.g., for network failures).

If given more time or working in a production environment, these would be implemented to enhance the application's robustness and maintainability.
