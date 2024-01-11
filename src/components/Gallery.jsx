import { styled } from "styled-components";
import main1 from "../assets/images/tour-1.jpeg";
import main2 from "../assets/images/tour-2.jpeg";
import main3 from "../assets/images/tour-3.jpeg";
import main4 from "../assets/images/tour-4.jpeg";
import main5 from "../assets/images/tour-5.jpeg";
import main6 from "../assets/images/tour-6.jpeg";
import main7 from "../assets/images/tour-1.jpeg";
import main8 from "../assets/images/tour-2.jpeg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Gallery = () => {
  return (
    <Wrapper>
      <section>
        <div className="section-title gallery-title">
          <h2>
            our<span> gallery</span>
          </h2>
        </div>
        <div className="gallery-center ">
          <article className="gallery-img-container">
            <img src={main1} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
          <article className="gallery-img-container">
            <img src={main2} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
          <article className="gallery-img-container">
            <img src={main3} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
          <article className="gallery-img-container">
            <img src={main4} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
          <article className="gallery-img-container">
            <img src={main5} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
          <article className="gallery-img-container">
            <img src={main6} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
          <article className="gallery-img-container">
            <img src={main7} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
          <article className="gallery-img-container">
            <img src={main8} alt="tour-1" className="gallery-img" />
            <Link to="#" className="gallery-icon">
              <FaSearch />
            </Link>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .gallery-img-container {
    position: relative;
    background: var(--clr-primary-5);
  }
  .gallery-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    color: var(--clr-white);
    font-size: 3rem;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--transition);
    cursor: pointer;
  }
  .gallery-img {
    height: 17rem;
    object-fit: cover;
    transition: var(--transition);
  }
  .gallery-img-container:hover .gallery-img {
    opacity: 0.5;
  }
  .gallery-img-container:hover .gallery-icon {
    opacity: 1;
  }
  .gallery-title {
    margin-top: 10rem;
  }
  @media screen and (min-width: 576px) {
    .gallery-center {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .gallery-center {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1170px) {
    .gallery-center {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default Gallery;
