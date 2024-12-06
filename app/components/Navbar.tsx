import React from "react";
import { Link } from "@remix-run/react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-pink-300">
      <ul className="flex justify-center space-x-6">
        <li className="p-12"><Link to="/">Profile Page</Link></li>
        <li className="p-12"><Link to="/tabs/skills">Skills</Link></li>
        <li className="p-12"><Link to="/tabs/projects">Projects</Link></li>
        <li className="p-12"><Link to="/tabs/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
