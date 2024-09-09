

function App() {

  return (
    <div className="container mx-auto my-5">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-lg font-bold">
            <a href="#" className="hover:text-gray-200">
              Starter Code
            </a>
          </div>

          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </nav>

          <div>
            <a
              href="#"
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Login
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App
