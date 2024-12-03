import Intro from "./Intro/Intro";
import "./Home.css";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <Intro />
      <Projects />
      <Services />
      <ContactUs />
      <ToastContainer />
    </div>
  );
};

export default Home;
