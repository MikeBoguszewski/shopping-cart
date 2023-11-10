import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div
        style={{ backgroundImage: 'url(/src/assets/photo.jpg)' }}
        className="w-screen h-screen bg-cover bg-no-repeat"
      >
        <div className="bg-black/60 h-screen overflow-hidden">
          <div className="flex flex-col text-center items-center text-white p-48 min-w-full">
            <span className="text-5xl">Welcome to Fake Store!</span>
            <span className="text-lg pt-3">
              We are your trusted online emporium, offering a wide range of
              products to cater to your diverse lifestyle. Discover a world of
              possibilities with our extensive collection of items, from fashion
              and electronics to home decor and more. Whether you're looking for
              the latest trends, tech gadgets, or unique gifts, we've got you
              covered. Why shop with us? Variety: Explore a curated selection of
              products, handpicked to meet your every need. Quality: We pride
              ourselves on providing only the highest quality items to ensure
              your satisfaction. Affordability: Enjoy competitive prices and
              special discounts on a range of products. Convenience: Shop from
              the comfort of your home, and we'll deliver your purchases right
              to your doorstep. Customer Support: Our dedicated customer support
              team is here to assist you with any queries or concerns. Join our
              growing community of happy shoppers and experience the convenience
              of online shopping at its best. Start browsing our store today,
              and let us help you find exactly what you're looking for. Thank
              you for choosing Fake Store. We look forward to serving you!
            </span>
            <button className="bg-sky-600 text-white px-4 py-2 rounded-full m-5">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
