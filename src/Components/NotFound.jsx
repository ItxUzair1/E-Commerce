import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
