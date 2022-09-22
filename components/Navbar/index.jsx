import Link from "next/link";
import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link"> Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a className="nav-link"> Products</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/CSR">
                <a className="nav-link"> CSR</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/SSR">
                <a className="nav-link"> SSR</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/SSG">
                <a className="nav-link"> SSG</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ISR">
                <a className="nav-link"> ISR</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
