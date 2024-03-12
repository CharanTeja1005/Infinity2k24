import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-8">
        Lost your way? Go to Home.. (or) Go Home...
      </p>
      <Link
        to="/"
        className="text-lg sm:text-xl lg:text-2xl bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFoundPage;
