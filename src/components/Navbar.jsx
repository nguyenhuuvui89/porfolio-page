import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-20 h-10 rounded-lg bg-white
      items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Vincent</p>
      </NavLink>
      <nav className="flex gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-blue-500 text-lg" : "text-black text-lg"} >
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) =>
            isActive ? "text-blue-500 text-lg" : "text-black text-lg"}>
          Family
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-blue-500 text-lg" : "text-black text-lg"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
