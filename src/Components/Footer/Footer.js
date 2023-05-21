import { Link } from 'react-router-dom';
import { Logo } from '../Logo'
import { SocialMediaWidget } from '../SocialMediaWidget';
import './Footer.css';

export const Footer = () => {
    return (
      <>
        <footer>
          <section className="FooterLogo">
            <Logo
              className="LL-FooterLogo"
              src="https://ik.imagekit.io/zenius/Coursera/html-css/Asset_14_4x_d1Yk7QBPiW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674426270880"
               height="60px"
            />
          </section>
          <section className="FooterMenu">
            <nav className="nav">
              <h3 class="nav-heading">Navigation</h3>
                <ul>
                  <li>
                    <Link to="/" className="nav-item">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-item">About</Link>
                  </li>
                  <li>
                    <Link to="/menu" className="nav-item">Menu</Link>
                  </li>
                  <li>
                    <Link to="/reservations" className="nav-item">Reservations</Link>
                  </li>
                  <li>
                    <Link to="/order-online" className="nav-item">Order Online</Link>
                  </li>
                  <li>
                    <Link to="/login" className="nav-item">Login</Link>
                  </li>
                </ul>
            </nav>
          </section>
          <section className="FooterContacts">
            <h3 class="contacts-heading">Contacts</h3>
            <p>
              2548 Matthews Street, Chicago, Illinois - 60631 <br />
              815-582-5830 <br />
              contact@littlelemon.com</p>
          </section>
          <section className="FooterSocials">
            <h3 class="socials-heading">Social Media</h3>
            <nav className="Navigation FooterNavigation">
              <SocialMediaWidget />
            </nav>
          </section>
        </footer>
      </>
    );
  };

