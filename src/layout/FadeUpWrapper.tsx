import "./FedeUpWrapper.css";

import { JSX } from "react";

type FadeUpProps = {
  delay?: string;
  children: JSX.Element;
};

export default function FadeUpWrapper({ delay, children }: FadeUpProps) {
  return (
    <div style={{ animationDelay: `${delay}` }} className={`to-fade`}>
      {children}
    </div>
  );
}
