import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gray-50">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Welcome to MA Solutions
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-xl">
        We provide amazing web development and digital services to help you build
        your dream project.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/services"
          className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-500 transition"
        >
          Our Services
        </Link>
        <Link
          to="/contact"
          className="border border-gray-600 text-gray-600 px-6 py-3 rounded-md hover:bg-indigo-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
