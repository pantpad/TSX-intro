import "./App.css";
import Demo from "./components/Demo";
import Header from "./components/Header/Header";
import SectionGrid from "./layout/SectionGrid";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const allElementToAnimate = document.querySelectorAll(".to-fade");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      });
    }, options);

    allElementToAnimate.forEach((element) => observer.observe(element));
  }, []);

  return (
    <>
      <Header />
      <SectionGrid />
      <Demo firstName="firstName" />
    </>
  );
}

export default App;
