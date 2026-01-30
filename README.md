# Foodibae 🍔🍕

A modern, responsive food delivery web application built with React and Vite. Order your favorite meals from local restaurants with ease!

## 🚀 Features

- **Browse Categories**: Explore various food categories like burgers, pizzas, and more
- **Restaurant Listings**: View detailed information about restaurants and their offerings
- **Shopping Cart**: Add items to cart, manage quantities, and proceed to checkout
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Modern UI**: Clean and intuitive user interface

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: CSS Modules / Custom CSS
- **Icons & Assets**: Local image assets
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/foodibae.git
   cd foodibae
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

- Browse through different food categories on the home page
- Click on food items to view details
- Add items to your cart using the cart functionality
- Navigate through the app using the navigation bar

## 🏗️ Project Structure

```
foodibae/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable UI components
│   │   ├── Card.jsx       # Food item card component
│   │   ├── Card2.jsx      # Alternative card component
│   │   └── Nav.jsx        # Navigation component
│   ├── context/           # React context for state management
│   ├── pages/             # Page components
│   │   └── Home.jsx       # Home page
│   ├── Redux/             # Redux store and slices
│   │   ├── cartSlice.js   # Cart state management
│   │   └── store.js       # Redux store configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Enjoy your food delivery experience with Foodibae! 🍽️**
