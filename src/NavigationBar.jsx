import { Link } from 'react-router-dom';
export default function NavigationBar() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return (
    <div className="flex h-20 items-center justify-between bg-sky-500">
      <div className="text-3xl font-bold m-5 min-w-fit">
        <Link to="/">Fake Store</Link>
      </div>
      <div className="flex gap-96 text-xl">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <Link to="/cart" className="relative">
        <img className="w-10 m-5" src="/public/assets/cart.svg"></img>
        <div className="rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-xs w-6 h-6 absolute top-0 right-0 mt-2 mr-2">
          {cart.length}
        </div>
      </Link>
    </div>
  );
}
