import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-50 to-green-100 px-4">
      
      
      <h1 className="text-7xl md:text-9xl font-extrabold text-green-600">
        404
      </h1>

      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
        Page Not Found
      </h2>

    
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-md transition">
          ⬅ Back to Home
        </button>
      </Link>

    
      <div className="mt-10 text-6xl">
        🐄 🐐 🐑
      </div>
    </div>
  );
};

export default NotFoundPage;