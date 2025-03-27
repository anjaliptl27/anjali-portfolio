import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollToSection = (id) => {
    navigate("/");
    if (id === "home") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsOpen(false); 
  };

  const NavLink = ({ link }) => (
    <button
      onClick={() => handleScrollToSection(link.id)}
      className="text-lg font-medium px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
    >
      {link.name}
    </button>
  );
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray bg-opacity-30 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
          <FaBars size={28} />
        </button>

        <div className="hidden md:flex space-x-4 mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-700 px-6 py-2 rounded-full">
          {navLinks.map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 left-0 w-2/3 h-full bg-gray bg-opacity-95 p-6 flex flex-col items-center space-y-6 md:hidden z-50 shadow-lg"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 text-white"
            >
              <FaTimes size={28} />
            </button>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollToSection(link.id)}
                className="text-white text-lg font-medium hover:text-secondary transition"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
