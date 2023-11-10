export default function Product({ product, addProductToCart }) {
  return (
    <div className="border p-3 flex flex-col h-full items-center">
      <div className="grow">
        <div className="flex items-center justify-center h-full">
          <img src={product.image} className="w-36" alt={product.title} />
        </div>
      </div>
      <div className="text-center text-sm mb-2">{product.title}</div>
      <div className="text-lg mb-2">${product.price.toFixed(2)}</div>
      <button className="bg-sky-500 text-white px-4 py-2 rounded-lg" onClick={() => {addProductToCart(product)}}>
        Add to cart
      </button>
    </div>
  );
}
