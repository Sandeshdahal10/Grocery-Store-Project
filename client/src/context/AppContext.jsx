import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

/**
 * AppContextProvider
 *
 * Provides application-wide state and actions via React Context.
 *
 * Exposes:
 * - navigate: function (from react-router) for navigation
 * - user, setUser: authenticated user state
 * - isSeller, setIsSeller: seller flag
 * - showUserLogin, setShowUserLogin: UI modal state for login
 * - products: product list (initialized from dummyProducts)
 * - currency: currency symbol from env
 * - addToCart(itemId): increments quantity for itemId in cart
 * - updateCartItems(itemId, quantity): set explicit quantity for itemId
 * - removeFromCart(itemId): decrements/removes item from cart
 * - cartItems: map of itemId => quantity
 * - searchQuery, setSearchQuery: search state
 *
 * Usage:
 * Wrap <AppContextProvider> around your app root and consume with `useAppContext()`.
 *
 * Returns: AppContext.Provider with the value object containing state & actions.
 */
export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // Add product to cart

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
  };
  // update Cart items quantity

  const updateCartItems = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated");
  };

  //remove product from cart

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }

    toast.success("Item removed from cart");
    setCartItems(cartData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItems,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * useAppContext
 *
 * Convenience hook to access AppContext values.
 *
 * Returns: context value object provided by AppContextProvider.
 */
export const useAppContext = () => {
  return useContext(AppContext);
};
