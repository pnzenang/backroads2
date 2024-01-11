import { styled } from "styled-components";
import main from "../assets/images/about.jpeg";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import FeaturedTours from "./FeaturedTours";
FeaturedTours;
const About = () => {
  return (
    <Wrapper>
      <section className="section" id="about">
        <div className="section-title">
          <h2>
            about<span> us</span>
          </h2>
        </div>
        <div className="section-center about-center">
          <article className="about-img">
            <img src={main} alt="awesome beach" className="about-photo" />
          </article>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ad
              sit ipsum quod beatae officia dolorum quo nulla, voluptatibus,
              temporibus pariatur corrupti, blanditiis non consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, itaque odit? Ab reprehenderit inventore obcaecati
              velit officiis voluptas! Exercitationem, voluptatum!
            </p>
            <Link to="#" className="btn">
              read more
            </Link>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .about-img,
  .about-info {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 992px) {
    .about-center {
      gap: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .about-img,
    .about-info {
      align-self: center;
    }
  }
  @media screen and (min-width: 1170px) {
    .about-img::before {
      content: "";
      position: absolute;
      border: 0.5rem solid var(--clr-primary-5);
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      top: -1.5rem;
      left: -1.5rem;
      /* z-index: -1; */
    }
    .about-img {
      position: relative;
    }
    .about-photo {
      position: relative;
    }
  }
`;
export default About;
