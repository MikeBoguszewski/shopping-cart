import NavigationBar from './NavigationBar';
import { useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  return (
    <div className="w-screen">
      <NavigationBar />
      <div className="flex justify-around pt-10">
        <div>
          <div className="flex gap-10">
            <div className="text-2xl font-bold mb-5">Your Shopping Cart</div>
            {cart.length === 0 ? null : (
              <p className="text-2xl font-bold">
                {cart.length === 1
                  ? `${cart.length} item`
                  : `${cart.length} items`}
              </p>
            )}
          </div>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div key={index} className="flex gap-10 border p-10">
                <img src={product.image} className="w-20"></img>
                <div>
                  <p className="text-xl">{product.title}</p>
                  <p className="text-xl">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty. Go buy things.</p>
          )}
        </div>
        <div>
          <div className="text-2xl font-bold mb-5">Checkout</div>
            <button
              className="bg-sky-500 text-white px-4 py-2 rounded-lg w-32"
              onClick={() => {
                localStorage.removeItem('cart');
                setCart(JSON.parse(localStorage.getItem('cart')) || []);
              }}
            >
              Confirm
            </button>
            <img src="/public/assets/payment.jpg" className="w-80"></img>
        </div>
      </div>
    </div>
  );
}
