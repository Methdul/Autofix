import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 mb-16 text-center">
            <h1 className="text-7xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link 
                to="/"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
                Return to Home
            </Link>
        </div>
    );
}
