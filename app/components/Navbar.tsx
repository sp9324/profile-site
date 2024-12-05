import React from "react";
import { Link } from "@remix-run/react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Profile Page</Link></li>
        <li><Link to="/tabs/skills">Skills</Link></li>
        <li><Link to="/tabs/projects">Projects</Link></li>
        <li><Link to="/tabs/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
