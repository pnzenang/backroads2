import { Link } from "react-router-dom";
import { styled } from "styled-components";
import main from "../assets/images/main.jpeg";

const Hero = () => {
  return (
    <Wrapper>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h1>continue exploring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              sequi veritatis necessitatibus beatae molestiae cumque eligendi
              officia, quisquam nihil ipsam dicta totam sed provident accusamus
            </p>
            <Link to="/featured" className="btn hero-btn scroll-link">
              explore tours
            </Link>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .hero {
    min-height: 100vh;
    background: var(--clr-primary-5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-banner {
    text-align: center;
    color: var(--clr-white);
    padding: 0.3rem;
  }
  .hero-banner h1 {
    text-transform: uppercase;
  }
  .hero-banner p {
    max-width: 35rem;
    margin: 0 auto;
    color: var(--clr-white);
    letter-spacing: var(--spacing);
  }
  .hero-btn {
    padding: 0.9rem 1.6rem;
    margin: 2rem;
    font-size: 1.25rem;
    background: var(--clr-white);
    color: var(--clr-primary-5);
  }
  .hero-btn:hover {
    background: transparent;
    color: var(--clr-white);
    border-color: var(--clr-white);
  }

  @media screen and (min-width: 768px) {
    .hero {
      background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
        url(${main}) center/cover no-repeat;
    }
    .hero-banner {
      padding: 0;
    }
    .hero-banner p {
      max-width: 45rem;
    }
  }
`;
export default Hero;
