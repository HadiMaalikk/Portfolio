import { Link } from "react-router-dom";

const navLinks = [
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Hobbies", href: "/hobbies" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="w-full mt-[60px] flex justify-center gap-2 tracking-[-0.06em]">
  {/* Black nav with border and rounded left */}
    <div className="flex items-center bg-[#5050501A] backdrop-blur border border-white/30 rounded-l overflow-hidden text-white">
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

  {/* Contact button without border */}
  <div className="flex items-center justify-center">
  <Link
    to="/contact"
    className="h-full bg-white  text-black font-medium text-[15px] font-inter px-6 py-1 flex items-center justify-center rounded-r "   
  >
    Contact
  </Link>
  </div>
</nav>

    </div>
  );
};

export default Navbar;
