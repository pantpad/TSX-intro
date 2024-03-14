import "./FedeUpWrapper.css";

import { JSX } from "react";

type FadeUpProps = {
  children: JSX.Element;
};

export default function FadeUpWrapper({ children }: FadeUpProps) {
  return <div className="to-fade">{children}</div>;
}
