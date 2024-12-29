import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync state with localStorage on mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, [location]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const guestMenuItems = [
    { to: "/about", label: "About Us" },
    { to: "/", label: "Home" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/login", label: "Login" },
    { to: "/signup", label: "Sign Up" },
  ];

  const loggedInMenuItems = [
    { to: "/about", label: "About Us" },
    { to: "/", label: "Home" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/profile", label: "Profile" },
    { to: "/cart", label: <FontAwesomeIcon icon={faShoppingCart} size="lg" /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-yellow-900 p-4 relative" role="navigation">
      <div className="flex items-center justify-between">
        <h1 className="text-lime-500 text-3xl font-bold">EchoShelf</h1>

        {/* Toggle Button for Mobile */}
        <button
          className="text-lime-500 text-2xl md:hidden focus:outline-none absolute right-4 top-4"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-lg">
            <MenuItems items={isLoggedIn ? loggedInMenuItems : guestMenuItems} />
          </ul>

          {/* Logout Button (Only on Desktop) */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 hidden md:block"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col space-y-4 mt-4 md:hidden transition-all duration-300 ease-in-out`}
      >
        <MenuItems items={isLoggedIn ? loggedInMenuItems : guestMenuItems} />
        {isLoggedIn && (
          <div className="text-center">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </ul>
    </nav>
  );
}

function MenuItems({ items }) {
  return items.map((item, index) => (
    <li key={index} className="group">
      <Link
        to={item.to}
        className="text-lime-500 font-bold relative group-hover:text-white text-xl"
      >
        {item.label}
      </Link>
    </li>
  ));
}

export default Navbar;
