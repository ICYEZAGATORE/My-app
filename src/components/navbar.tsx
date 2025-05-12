import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            href="/home"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/users/1"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            User 1
          </Link>
          <Link
            href="/users/2"
            className="text-gray-800 hover:text-blue-600  font-medium"
          >
            User 2
          </Link>
          <Link
            href="/users/3"
            className="text-gray-800 hover:text-blue-600  font-medium"
          >
            User 3
          </Link>
        </div>
      </div>
    </nav>
  );
}
