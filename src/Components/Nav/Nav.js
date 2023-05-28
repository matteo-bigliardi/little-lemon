import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
      <>
        <menu className='navbar-menu'>
          <Link to="/">
            <img
              src={require("../../assets/images/nav-logo.png")}
              alt="Little Lemon logo"
              className="nav-image"
            ></img>
          </Link>
          <Link to="/" className="hover-effect"><h1>Home</h1></Link>
          <Link to="/about" className="hover-effect"><h1>About</h1></Link>
          <a
            className="hover-effect"
            href={require("../../assets/images/menu.webp")}
            target="_blank"
            rel="noreferrer"
          >
            <h1>Menu</h1>
          </a>
          <Link to="/reservations" className="hover-effect"><h1>Reservations</h1></Link>
          <Link to="/order-online" className="hover-effect"><h1>Order Online</h1></Link>
          <Link to="/login" className="hover-effect"><h1>Login</h1></Link>
        </menu>
      </>
    );
  }

