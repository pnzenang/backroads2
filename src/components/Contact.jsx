import { styled } from "styled-components";
import Gallery from "./Gallery";

const Contact = () => {
  return (
    <Wrapper>
      <section className="section contact">
        <div className=" section-title contact-title">
          <h2>
            contact<span> us</span>
          </h2>
        </div>
        <div className="section-center contact-center">
          <article className="contact-title">
            <h3>want latest tour info and updates?</h3>
            <p>Sign up for newsletter and stay up to date</p>
          </article>
          <form className="contact-form">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="your email"
            />
            <button type="submit" className="submit-btn">
              submit
            </button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact {
    /* display: grid; */
    background: var(--clr-primary-5);
    min-height: calc(100vh - 20rem);
  }
  .contact-title {
    color: var(--clr-white);
  }
  .contact-title p {
    color: var(--clr-primary-8);
  }
  .contact-form {
    display: flex;
    max-width: 28rem;
  }
  .form-control {
    flex: 1 1 auto;
  }
  .form-control,
  .submit-btn {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
    letter-spacing: var(--spacing);
    background: var(--clr-white);
    text-transform: capitalize;
    border: transparent;
  }
  .form-control::placeholder {
    color: inherit;
  }

  .submit-btn {
    font-family: var(--ff-primary2);
    margin-left: 0.5rem;
    background: var(--clr-primary-8);
    color: var(--clr-primary-1);
    cursor: pointer;
    transition: var(--transition);
  }
  .submit-btn:hover {
    background: var(--clr-primary-1);
    color: var(--clr-primary-5);
  }
  @media screen and (min-width: 992px) {
    .contact-center {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;
    }
    .contact-form {
      align-self: flex-start;
      flex: 1 1 auto;
      max-width: 100%;
    }
  }
`;
export default Contact;
