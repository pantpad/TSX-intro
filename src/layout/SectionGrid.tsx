import { JSX } from "react";
import "./SectionGrid.css";

type SectionProps = {
  className: string;
  children: JSX.Element;
};

export default function SectionGrid({ className, children }: SectionProps) {
  return (
    <section>
      <div className={className}>{children}</div>
    </section>
  );
}
