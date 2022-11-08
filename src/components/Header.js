import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to="/" className="text-light">
            Crud-React, redux, rest api & axios
          </Link>
        </h1>
      </div>

      <Link
        className="btn btn-danger display-block nuevo-post d-md-inline-block"
        to="/productos/nuevo"
      >
        &#43; Agregar Producto
      </Link>
    </nav>
  );
};

export default Header;
