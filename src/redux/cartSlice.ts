import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../types";
import toast from "react-hot-toast";

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

// Helper function to calculate the total price
const calculateTotalPrice = (items: CartItem[]): number =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

// Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add or update item in the cart
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // Item already exists in the cart, increase quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Item does not exist in the cart, add it
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success("Item added to cart");
      }

      // Recalculate total price
      state.totalPrice = calculateTotalPrice(state.items);
    },
    // Update the quantity of an item
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex >= 0) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.items.splice(existingItemIndex, 1);
          toast.success("Item Removed from cart");
        } else {
          // Update quantity of the existing item
          state.items[existingItemIndex].quantity = quantity;
          toast.success("Item Quantity Updated");
        }

        // Recalculate total price
        state.totalPrice = calculateTotalPrice(state.items);
      }
    },
    // Remove a specific item from the cart
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast.success("Item Removed from cart");

      state.totalPrice = calculateTotalPrice(state.items);
    },
    // Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, updateQuantity, clearCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
