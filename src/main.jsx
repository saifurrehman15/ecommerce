import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./phone.css";
import ThemeContextProvider from "./Context/ThemeContext.jsx";
import UserContextProvider from "./Context/userContext.jsx";
import CartProvider from "./Context/addtoCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>
);
