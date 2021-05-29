import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
     <Link style={{textDecoration:"none",color:"black"}} to ='/'><h1 >Sports Mania</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/home'  style={{textDecoration:"none"}}>
        <h3 className="nav-link text-dark" href="/home"><b>Home</b></h3>
        </Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;