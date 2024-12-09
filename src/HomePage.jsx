import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';
import BackgroundImage from './assets/photo.jpg'

export default function HomePage() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div
        style={{ backgroundImage: `url(${BackgroundImage})` }}
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
              covered. Start browsing our store today,
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
