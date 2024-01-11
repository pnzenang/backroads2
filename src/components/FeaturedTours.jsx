import { styled } from "styled-components";
import main1 from "../assets/images/tour-1.jpeg";
import main2 from "../assets/images/tour-2.jpeg";
import main3 from "../assets/images/tour-3.jpeg";
import main4 from "../assets/images/tour-4.jpeg";
import { FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const FeaturedTours = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-title">
          <h2>
            featured<span> tours</span>
          </h2>
        </div>
        <div className="section-center featured-center">
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={main1} alt="tour1-image" className="tour-img" />
              <p className="tour-date">August 26th 2020</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>tibet adventure</h4>
                <p>6 days</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aliquid sed consequatur veniam asperiores. Libero, earum,
                praesentium eveniet dicta, soluta maiores necessitatibus quasi
                sunt rerum eligendi molestias fugit. Nisi, ex.
              </p>

              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <FaMap />
                  </span>
                  china
                </p>
                <p>from $2100</p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={main2} alt="tour1-image" className="tour-img" />
              <p className="tour-date">October 1st 2020</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>best of java</h4>
                <p>11 days</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aliquid sed consequatur veniam asperiores. Libero, earum,
                praesentium eveniet dicta, soluta maiores necessitatibus quasi
                sunt rerum eligendi molestias fugit. Nisi, ex.
              </p>

              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <FaMap />
                  </span>
                  indonesia
                </p>
                <p>from $3200</p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={main3} alt="tour1-image" className="tour-img" />
              <p className="tour-date">June 3th 2020</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>bamenda</h4>
                <p>13 days</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aliquid sed consequatur veniam asperiores. Libero, earum,
                praesentium eveniet dicta, soluta maiores necessitatibus quasi
                sunt rerum eligendi molestias fugit. Nisi, ex.
              </p>

              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <FaMap />
                  </span>
                  cameroon
                </p>

                <p>from $3300</p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={main4} alt="tour1-image" className="tour-img" />
              <p className="tour-date">janary 10th 2020</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>western mountain</h4>
                <p>5 days</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aliquid sed consequatur veniam asperiores. Libero, earum,
                praesentium eveniet dicta, soluta maiores necessitatibus quasi
                sunt rerum eligendi molestias fugit. Nisi, ex.
              </p>

              <div className="tour-footer">
                <p>
                  <span className="tour-icon">
                    <FaMap />
                  </span>
                  gabon
                </p>

                <p>from $4200</p>
              </div>
            </div>
          </article>
        </div>
        <div className="tour-btn">
          <Link to="#" className="btn">
            all tours
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .tour-card {
    transition: var(--transition);
    background: var(--clr-grey-10);
    box-shadow: var(--light-shadow);
    margin-bottom: 2rem;
  }
  .tour-card:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
  }
  .tour-img-container {
    position: relative;
  }
  .tour-img {
    height: 15rem;
    object-fit: cover;
  }
  .tour-date {
    position: absolute;
    right: 0;
    bottom: 0;
    background: var(--clr-primary-8);
    margin-bottom: 0;
    color: var(--clr-primary-1);
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  .tour-icon {
    margin-right: 5px;
  }
  .tour-info {
    padding: 1.25rem 1.5rem;
  }
  .tour-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .tour-footer p {
    line-height: 0;
    margin-bottom: 0;
    text-transform: capitalize;
    color: var(--clr-primary-5);
  }
  .tour-btn {
    text-align: center;
  }
  .tour-title {
    display: flex;
    justify-content: space-between;
  }
  .tour-title p {
    color: var(--clr-grey-7);
  }
  @media screen and (min-width: 768px) {
    .featured-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    /* .featured-center {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .tour-card {
      flex: 0 0 calc(50% - 2rem);
    } */
  }
  @media screen and (min-width: 1170px) {
    /* .featured-center {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    } */

    /* .tour-card {
      flex: 0 0 calc(33.33% - 2rem);
    } */
    .featured-center {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default FeaturedTours;
