import { createContext, useEffect, useState } from "react";

export const cart = createContext();

function CartProvider({ children }) {
  const [cartItem, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
    }
  }, [cartItem]);

  useEffect(() => {
    const items = localStorage.getItem("cartItems");

    if (items) {
      setCart([...JSON.parse(items)]);
      setLoaded(true);
    }
  }, []);

  const addItems = (itemSelected) => {
    const arr = [...cartItem];
    const index = arr.findIndex((data) => data.id === itemSelected.id);
    if (index !== -1) {
      arr[index].quantity++;
    } else {
      arr.push({ ...itemSelected, quantity: 1 });
    }
    setCart(arr);
  };

  const decreaseItems = (itemSelected) => {
    const arr = [...cartItem];
    const index = arr.findIndex((data) => data.id === itemSelected.id);
    if (index !== -1) {
      arr[index].quantity--;
    }
    setCart(arr);
  };

  const deleteItems = (itemsSelected2) => {
    const arr = [...cartItem];
    const index = arr.findIndex((data) => data.id === itemsSelected2.id);
    if (index !== -1) {
      arr.splice(index, 1);
      setCart(arr);
    }
  };

  const itemsAdded = (itemSelected) => {
    let arr = cartItem;
    const index = arr.findIndex((data) => data.id === itemSelected.id);
    if (index === -1) {
      null;
    } else {
      return arr[index];
    }
  };

  return (
    <cart.Provider
      value={{ cartItem, addItems, deleteItems, itemsAdded, setCart,decreaseItems }}
    >
      {children}
    </cart.Provider>
  );
}

export default CartProvider;
