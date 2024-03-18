import FadeUpWrapper from "../../layout/FadeUpWrapper";
import "./PropsSection.css";
import anyError from "../../assets/firstsection/badType.png";
import Typed from "../../assets/1.png";
import HowToType from "../../assets/2.png";

export default function PropsSection() {
  return (
    <>
      <FadeUpWrapper>
        <>
          <div className="prop-section-first-item">
            <h2 className="prop-title">#1 PROPS in TSX</h2>
            <p>Any components can receive props BUT they need to be TYPED</p>
          </div>
        </>
      </FadeUpWrapper>
      <FadeUpWrapper delay="1000ms">
        <div className="prop-section-second-item">
          <h2 className="prop-title-hidden">#1 PROPS in TSX</h2>
          <img src={anyError} alt="error" />
        </div>
      </FadeUpWrapper>
      <FadeUpWrapper delay="1000ms">
        <div style={{ marginTop: "4em" }} className="prop-section-first-item">
          <h3 className="prop-title">How to type props in react component?</h3>
        </div>
      </FadeUpWrapper>
      <FadeUpWrapper delay="1000ms">
        <div className="prop-section-second-item">
          <h3 className="prop-title-hidden">
            How to type props in react component?
          </h3>
          <img src={Typed} alt="how_to_type" />
        </div>
      </FadeUpWrapper>
      <FadeUpWrapper delay="2000ms">
        <div style={{ marginTop: "2em" }} className="prop-section-first-item">
          <p className="prop-title">
            Then simply apply the type after the props declaration
          </p>
        </div>
      </FadeUpWrapper>
      <FadeUpWrapper delay="2000ms">
        <div className="prop-section-second-item">
          <p className="prop-title-hidden">
            How to type props in react component?
          </p>
          <img src={HowToType} alt="how_to_type" />
        </div>
      </FadeUpWrapper>
    </>
  );
}
