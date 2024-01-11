import { styled } from "styled-components";
import logo from "../assets/images/logo.svg";
import { FaBars, FaFacebook, FaSquarespace, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHomeContext } from "../pages/HomeLayout";

const Navbar = () => {
  const { showNavLinks, toggleNavLinks } = useHomeContext();
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="" className="nav-logo" />
            <button
              type="button"
              className="nav-toggle"
              onClick={toggleNavLinks}
            >
              <FaBars />
            </button>
          </div>
          <ul className={showNavLinks ? "nav-links" : "show-links"}>
            <li>
              <Link
                to="/"
                className="nav-link scroll-link"
                onClick={toggleNavLinks}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link scroll-link"
                onClick={toggleNavLinks}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="nav-link scroll-link"
                onClick={toggleNavLinks}
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to="/featured"
                className="nav-link scroll-link"
                onClick={toggleNavLinks}
              >
                featured
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="nav-link scroll-link"
                onClick={toggleNavLinks}
              >
                gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link scroll-link"
                onClick={toggleNavLinks}
              >
                contact
              </Link>
            </li>
          </ul>
          <ul className="nav-icons">
            <li>
              <a
                href="http://www.facebook.com"
                target="_blank"
                className="nav-icon"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="http://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="http://www.squarespace.com"
                target="_blank"
                className="nav-icon"
              >
                <FaSquarespace />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    z-index: 2;
  }
  .nav-icons {
    display: none;
  }
  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    font-size: 2rem;
    color: var(--clr-primary-5);
  }
  .nav-toggle:hover {
    transform: scale(1.2);
    transition: var(--transition);
  }
  .nav-link {
    display: block;
    padding: 1rem 2rem;
    text-transform: capitalize;
    letter-spacing: var(--transition);
    color: var(--clr-grey-1);
    cursor: pointer;
  }
  .nav-link:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
    /* padding-left: 2.25rem; */
    transition: var(--transition);
  }
  .nav-links {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-links {
    height: 320px;
    transition: var(--transition);
  }
  @media screen and (min-width: 768px) {
    .navbar {
      padding: 1rem 2rem;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    .nav-links {
      height: auto;
      display: flex;
    }
    .show-links {
      display: flex;
      align-items: center;
      height: 0;
      transition: var(--transition);
    }
    .nav-icons {
      display: flex;
    }
    .nav-header {
      padding: 0 0;
    }
    .nav-link:hover {
      /* padding-left: 0; */
      color: var(--clr-primary-5);
      background: transparent;
    }
    .nav-link {
      padding: 0 1rem;
    }
    .nav-icon {
      margin-right: 0.7rem;
      color: var(--clr-primary-5);
      font-size: 1.2rem;
      transition: var(--transition);
    }
    .nav-icon:hover {
      color: var(--clr-primary-8);
    }
    .nav-toggle:hover {
      transform: scale(0);
      transition: var(--transition);
    }
  }
`;
export default Navbar;
