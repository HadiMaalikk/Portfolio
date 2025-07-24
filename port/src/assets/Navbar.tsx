import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Hobbies", href: "/hobbies" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-[20px] w-full z-[999] px-4">
      {/* Desktop navbar - centered */}
      <div className="hidden sm:flex justify-center">
        <nav className="flex items-center gap-2 tracking-[-0.06em]">
          {/* Left side with links */}
          <div className="flex items-center bg-[#5050501A] backdrop-blur border border-white/30 rounded-l overflow-hidden text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500">
            <Link
              to="/"
              className="px-6 py-1 font-labelle text-[25px] relative top-[2px]"
            >
              H
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-medium text-[15px] font-inter px-6 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right button */}
          <div className="flex h-full items-center justify-center">
            <Link
              to="/contact"
              className="h-full bg-white text-black font-medium text-[15px] font-inter px-6 py-1 flex items-center justify-center rounded-r"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="sm:hidden flex justify-between">
        <div></div>
        <p className={isOpen? "hidden" : "flex text-white font-labelle text-2xl"}>H</p>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          <img
            src={isOpen ? "close.svg" : "menu.svg"}
            alt="menu toggle"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="sm:hidden mx-16 mt-3 bg-[#5050501A] rounded-lg px-6 py-4 text-center border border-white/30 backdrop-blur">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-white font-labelle text-xl"
            >
              H
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white font-inter text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-black bg-white px-4 py-2 rounded font-inter text-sm"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
