import { FaFacebook, FaSquarespace, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <footer className=" section footer">
        <ul className="footer-links">
          <li>
            <Link to="/" className="footer-link scroll-link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer-link scroll-link">
              about
            </Link>
          </li>
          <li>
            <Link to="/services" className="footer-link scroll-link">
              services
            </Link>
          </li>
          <li>
            <Link to="/featured" className="footer-link scroll-link">
              featured
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="footer-link scroll-link">
              gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link scroll-link">
              contact
            </Link>
          </li>
        </ul>
        <ul className="footer-icons">
          <li>
            <a
              href="http://www.facebook.com"
              target="_blank"
              className="footer-icon"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="http://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="http://www.squarespace.com"
              target="_blank"
              className="footer-icon"
            >
              <FaSquarespace />
            </a>
          </li>
        </ul>
        <p className="copyright">
          copyright &copy;{" "}
          <span className="company-name"> backRoads travel tour company</span>
          <span className="date"> {new Date().getFullYear()}</span> all right
          reserved
        </p>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .footer {
    background: var(--clr-grey-1);
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .footer-links,
  .footer-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .footer-link {
    color: var(--clr-white);
    text-transform: capitalize;
    font-size: 1rem;
    margin-right: 1rem;
  }
  .footer-link:hover {
    color: var(--clr-primary-5);
  }
  .footer-icon {
    font-size: 2rem;
    margin-right: 1rem;
    color: var(--clr-primary-8);
    transition: var(--transition);
  }
  .footer-icon:hover {
    color: var(--clr-primary-5);
  }
  .copyright {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-white);
  }
  .company-name {
    color: var(--clr-primary-5);
  }
  .date {
    color: red;
  }
`;
export default Footer;
