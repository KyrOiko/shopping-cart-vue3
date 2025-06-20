# 🛒 Shopping Cart Application

Basic shopping cart application assignement.


### Project Structure
```
shopping-cart/
├── src/
│   ├── components/          # Reusable Vue components
│   ├── domain/             # Domain models and business logic
│   ├── router/             # Vue Router configuration
│   ├── services/           # API services and external integrations
│   ├── store/              # Vuex store modules
│   │   ├── cart/           # Shopping cart state management
│   │   ├── catalog/        # Product catalog state management
│   │   └── checkout/       # Checkout process state management
│   ├── utils/              # Utility functions and helpers
│   └── views/              # Page-level components
└── public/                 # Static assets
```

### State Management
The application uses a modular Vuex store with three main modules:

1. **Cart Module**: Manages shopping cart items, coupon codes, and pricing calculations
2. **Catalog Module**: Handles product fetching, loading states, and product management
3. **Checkout Module**: Manages checkout process, card validation, and payment flow

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VUE_APP_API_URL=your_api_url_here
   ```

4. **Start the development server**
   ```bash
   npm run serve
   ```

   The application will be available at `http://localhost:8080`


