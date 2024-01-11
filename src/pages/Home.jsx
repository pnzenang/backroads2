import {
  About,
  FeaturedTours,
  Hero,
  Services,
  Contact,
  Gallery,
  Footer,
  Navbar,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedTours />
      <Contact />
      <Gallery />
    </>
  );
};
export default Home;
