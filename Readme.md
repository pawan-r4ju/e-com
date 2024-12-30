# Blogger

A full-stack blogging platform built with Node.js, Express, MongoDB, and EJS.

## Features

- **Modern UI**: Built with React and Vite for a fast and responsive user experience.
- **State Management**: Utilizes Redux Toolkit for efficient state management.
- **Charts**: Integrated with ApexCharts for data visualization.
- **Payment Integration**: Supports PayPal payments using `@paypal/react-paypal-js`.
- **Routing**: Uses React Router for client-side routing.
- **Styling**: Styled with TailwindCSS and Flowbite for a sleek design.
- **Notifications**: Provides toast notifications using `react-toastify`.
- **Carousel**: Includes a product carousel using `react-slick` and `slick-carousel`.


## Tech Stack

- **Frontend**: React, Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: TailwindCSS, Flowbite
- **Charts**: ApexCharts
- **Notifications**: React Toastify
- **Payment Integration**: PayPal
- **Carousel**: React Slick, Slick Carousel

## Quick Start

1. **Clone the repository:***
   ```bash
   git clone https://github.com/yourusername/e-com.git
   cd e-com/frontend
   ```
2. **Install the dependencies:**
```bash
npm install
```
3. **Start Server:**
```bash
npm run dev
```
3. **Build Project:**
```bash
npm run dev
```


## Scripts

- **dev**: Starts the development server using Vite.  
- **build**: Builds the project for production.  
- **lint**: Lints the code using ESLint.  
- **preview**: Previews the production build.  

## Dependencies

- **@reduxjs/toolkit**: ^2.0.1  
- **apexcharts**: ^3.45.1  
- **browserslist**: ^4.22.2  
- **caniuse-lite**: ^1.0.30001571  
- **flowbite**: ^2.2.1  
- **moment**: ^2.30.1  
- **react**: ^18.2.0  
- **react-apexcharts**: ^1.4.1  
- **react-dom**: ^18.2.0  
- **react-icons**: ^4.12.0  
- **react-redux**: ^9.0.4  
- **react-router**: ^6.21.1  
- **react-router-dom**: ^6.21.1  
- **react-slick**: ^0.29.0  
- **react-toastify**: ^9.1.3  
- **slick-carousel**: ^1.8.1  
- **@paypal/react-paypal-js**: ^8.1.3
## Dev Dependencies

- **@types/react**: ^18.2.15  
- **@types/react-dom**: ^18.2.7  
- **@vitejs/plugin-react**: ^4.0.3  
- **autoprefixer**: ^10.4.16  
- **eslint**: ^8.45.0  
- **eslint-plugin-react**: ^7.32.2  
- **eslint-plugin-react-hooks**: ^4.6.0  
- **eslint-plugin-react-refresh**: ^0.4.3  
- **postcss**: ^8.4.31  
- **tailwindcss**: ^3.3.3  
- **vite**: ^5.0.0  

# Project Structure

```plaintext
frontend/
├── public/
│   ├── favicon.ico                   # Favicon for the application
│   ├── images/                       # Publicly accessible images
│   │   ├── products/                 # Product-related images
│   │   ├── banners/                  # Banner images
│   └── index.html                    # HTML entry point
├── src/
│   ├── assets/                       # Static assets for the project
│   │   ├── styles/                   # Global stylesheets
│   │   └── images/                   # Private images used in components
│   ├── components/                   # Reusable UI components
│   │   ├── common/                   # Common components
│   │   │   ├── Button/               # Button component
│   │   │   ├── Input/                # Input component
│   │   │   ├── Modal/                # Modal component
│   │   │   └── Loading/              # Loading spinner component
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header/               # Header layout
│   │   │   ├── Footer/               # Footer layout
│   │   │   └── Sidebar/              # Sidebar layout
│   │   └── ui/                       # UI-specific components
│   │       ├── Card/                 # Card component
│   │       ├── Table/                # Table component
│   │       └── Charts/               # Chart components
│   ├── features/                     # Feature-specific code
│   │   ├── auth/                     # Authentication-related features
│   │   ├── products/                 # Product management features
│   │   ├── cart/                     # Cart management features
│   │   ├── orders/                   # Order management features
│   │   └── admin/                    # Admin panel features
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAuth.js                # Hook for authentication logic
│   │   └── useCart.js                # Hook for cart management
│   ├── pages/                        # Page-specific components
│   │   ├── Home/                     # Home page
│   │   ├── Products/                 # Products page
│   │   ├── ProductDetails/           # Product details page
│   │   ├── Cart/                     # Cart page
│   │   ├── Checkout/                 # Checkout page
│   │   ├── Orders/                   # Orders page
│   │   └── Admin/                    # Admin dashboard
│   ├── services/                     # API services
│   │   ├── api.js                    # General API service
│   │   └── auth.js                   # Authentication API service
│   ├── store/                        # Redux store
│   │   ├── slices/                   # Redux slices
│   │   └── store.js                  # Store configuration
│   ├── utils/                        # Utility functions and constants
│   │   ├── constants.js              # Constants used across the app
│   │   └── helpers.js                # Helper functions
│   ├── App.jsx                       # Main application component
│   ├── main.jsx                      # Entry point for React application
│   └── routes.jsx                    # Route definitions
├── .env                              # Environment variables
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore file
├── index.html                        # Root HTML file
├── package.json                      # Project metadata and dependencies
├── postcss.config.js                 # PostCSS configuration
├── README.md                         # Project README
├── tailwind.config.js                # Tailwind CSS configuration
└── vite.config.js                    # Vite configuration


## License

- MIT  

## Author

- **Pawan Raju**  

## Made with ❤️ and JavaScript.

