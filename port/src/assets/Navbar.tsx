import { Link } from "react-router-dom";

const navLinks = [
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Hobbies", href: "/hobbies" },
];

const Navbar = () => {
  return (
    <div className = "fixed inset-x-0 w-full backdrop-blur-lg bg-[#5050501A] border border-white/30 rounded-l-[5px]">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          
        </div>
      </div>



      {/*
      <nav className="fixed w-full mt-[60px] flex justify-center gap-2 tracking-[-0.06em]">
  
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
        className="font-medium text-[15px] font-inter px-6 py-1 "
      >
        {link.name}
      </Link>
    ))}
  </div>

  {/* Contact button without border
  <div className="flex items-center justify-center">
  <Link
    to="/contact"
    className="h-full bg-white  text-black font-medium text-[15px] font-inter px-6 py-1 flex items-center justify-center rounded-r "   
  >
    Contact
  </Link>
  </div>
</nav>
  */}
    </div>
  );
};

export default Navbar;
