import FadeUpWrapper from "./FadeUpWrapper";
import "./SectionGrid.css";
export default function SectionGrid() {
  return (
    <section>
      <div className="section-container">
        <FadeUpWrapper>
          <div className="section-first-item">
            <h2>Converting JSX to TSX in REACT</h2>
            <p>
              Let's see how to refactor a normal jsx component giving it some
              TYPES using <strong>TypeScript!</strong>
            </p>
          </div>
        </FadeUpWrapper>
        <div className="section-second-item"></div>
      </div>
    </section>
  );
}
