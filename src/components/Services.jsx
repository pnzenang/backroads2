import { styled } from "styled-components";
import { FaSocks, FaTree, FaWallet } from "react-icons/fa";
import Footer from "./Footer";
import FeaturedTours from "./FeaturedTours";
const Services = () => {
  return (
    <Wrapper>
      <section className="section services">
        <div className="section-title">
          <h2>
            our<span> services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          <article className="service">
            <span className="service-icon">
              <FaWallet />
            </span>
            <div className="service-info">
              <h4 className="service-title">endless Biking</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                alias sapiente cum nisi, nihil omnis.
              </p>
            </div>
          </article>
          <article className="service">
            <span className="service-icon">
              <FaTree />
            </span>
            <div className="service-info">
              <h4 className="service-title">amazing comfort</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                alias sapiente cum nisi, nihil omnis.
              </p>
            </div>
          </article>
          <article className="service">
            <span className="service-icon">
              <FaSocks />
            </span>
            <div className="service-info">
              <h4 className="service-title">saving money</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                alias sapiente cum nisi, nihil omnis.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .services {
    scroll-margin-top: 4rem;
    background: var(--clr-grey-10);
    min-height: calc(100vh - 18rem);
  }
  .service {
    text-align: center;
    margin-bottom: 3rem;
  }
  .service-icon {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
    padding: 1rem 1rem 0.5rem 1rem;
    font-size: 2rem;
    display: inline-block;
    margin-bottom: 1.2rem;
  }
  .service-text {
    max-width: 20rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .services-center {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .services-center {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    .service {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
    }
    .service-icon {
      align-self: start;
    }
    .service-info {
      margin-bottom: 0.5rem;
    }
  }
`;
export default Services;
