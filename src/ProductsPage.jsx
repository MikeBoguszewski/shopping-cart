import { useEffect, useState } from 'react';
import Product from './Product';
import NavigationBar from './NavigationBar';
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  

  function addProductToCart(product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  function fetchProducts() {
    return fetch('https://fakestoreapi.com/products', {mode: "no-cors"}).then((res) => res.json());
  }

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="grid xl:grid-cols-4 xl:grid-rows-5 md:grid-cols-3 sm:grid-cols-2 gap-10 p-10">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            addProductToCart={addProductToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
}
