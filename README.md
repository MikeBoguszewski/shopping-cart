# **Shopping Cart App**

This project is a solution to the **Shopping Cart** challenge from [The Odin Project](https://www.theodinproject.com/). It was one of my first projects using **React**, aimed at building a functional shopping cart. The app allows users to add items, view the cart contents, and proceed to checkout. It showcases fundamental React concepts such as state management, component structure, and handling user interactions.

## **Overview**

### **The Challenge**
- Users should be able to:
  - Add items to the cart.
  - View the items added to the cart.
  - Adjust the quantity or remove items from the cart (with restrictions on item removal).
  - See the total price update dynamically as items are added.
  - The app limits removal functionality to the completion of the purchase.

## **Screenshot**

![Shopping Cart Screenshot](./screenshot.jpg)

## **Links**
- Live Demo: https://shopping-cart-eight-gilt.vercel.app
- GitHub Repository: https://github.com/MikeBoguszewski/shopping-cart

---

# **My Process**

## **Built With**
- **React**: JavaScript library for building the user interface and managing component state.
- **HTML5**: For structuring the content.
- **CSS**: For styling the user interface.
- **JavaScript**: Used to implement functionality and manage the cart state.

## **What I Learned**
This project allowed me to learn key React concepts, such as state management and handling user events. Notable lessons include:
- **Component structure**: Breaking down the app into reusable components for each part of the cart.
- **State management**: Using React's state hooks to manage and dynamically update the cart.
- **Array manipulation**: Working with arrays to store and modify cart items.
- **Event handling**: Handling user interactions to add items and update cart contents.

**Example code snippet (adding items to the cart):**

```js
function addProductToCart(product) {
  const updatedCart = [...cart, product];
  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
}
