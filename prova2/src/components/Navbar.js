import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">MyFinance</div>
      <nav>
        <a href="/" className="nav-link">Home</a>
        <a href="/transacoes" className="nav-link">Transações</a>
      </nav>
    </header>
  );
};

export default Navbar;
