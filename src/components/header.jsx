import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-lg font-bold">
            <Link to={"/"} className="hover:text-gray-200">
              Starter Code
            </Link>
          </div>

          <nav className="space-x-4">
          <Link to={"/"} className="hover:text-gray-200">
              Home
            </Link>
            <Link to={"/about"} className="hover:text-gray-200">
              About
            </Link>
            <Link to={"/contact"} className="hover:text-gray-200">
              Contact
            </Link>
          </nav>

          <div>
            <Link
              to={'/login'}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    );
}

export default Header;
