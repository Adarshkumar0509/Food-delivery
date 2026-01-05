# Food Delivery App

## Overview

A modern, full-stack food delivery application that streamlines the process of ordering food from local restaurants. Users can easily browse menus, place secure orders, track deliveries in real-time, and enjoy multiple payment options.

## Live Demo

🚀 **[Visit the Live App](https://food-delivery-ten-delta.vercel.app/)**

## Features

✅ **Menu Browsing** - Browse through restaurant menus with detailed food items and descriptions

✅ **Secure Payments** - Multiple payment options for safe and secure transactions

✅ **Real-time Order Tracking** - GPS-enabled order tracking to monitor delivery in real-time

✅ **Push Notifications** - Get timely updates about your order status

✅ **User-Friendly Interface** - Intuitive and responsive design for seamless experience

✅ **Restaurant Management** - Dashboard for restaurants to manage orders and menus

✅ **Order History** - Keep track of all previous orders

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS/Tailwind CSS** - Styling

### Backend
- **Node.js & Express** - Server and API
- **MongoDB** - Database

### Deployment
- **Vercel** - Frontend hosting
- **Heroku/AWS** - Backend hosting

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/Adarshkumar0509/Food-delivery.git
cd Food-delivery
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your configuration:

```
REACT_APP_API_URL=your_backend_url
REACT_APP_STRIPE_KEY=your_stripe_public_key
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
Food-delivery/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── hooks/          # Custom hooks
│   ├── context/        # React context
│   ├── utils/          # Utility functions
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── .gitignore
├── package.json
└── README.md
```

## How It Works

### For Users
1. Sign up or log in to your account
2. Browse available restaurants and their menus
3. Add items to your cart
4. Proceed to checkout
5. Choose payment method and complete transaction
6. Track your order in real-time
7. Receive notifications when order is out for delivery

### For Restaurants
1. Register as a restaurant partner
2. Add your menu items
3. Receive and manage orders through the dashboard
4. Update order status
5. View analytics and reports

## API Endpoints

- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id/menu` - Get restaurant menu
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Adarsh Kumar** - [GitHub](https://github.com/Adarshkumar0509)

## Contact & Support

If you have any questions or suggestions, feel free to reach out:
- GitHub Issues: [Report a bug](https://github.com/Adarshkumar0509/Food-delivery/issues)
- Email: adarsh.kumar@example.com

## Acknowledgments

- React & Vite communities
- All contributors and supporters
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
