import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <Image
              src="/icons8-fish-100.png"
              width="100"
              height="100"
              alt="logo"
            />
          </a>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" href={"/"}>
            <a className="navbar-item">Home</a>
          </Link>
          <Link className="navbar-item" href={"/MarineSpecies"}>
            <a className="navbar-item">Marine Species</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
