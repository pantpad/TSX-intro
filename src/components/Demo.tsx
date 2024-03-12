import { useState } from "react";

type DemoProps = {
  firstName: string;
};

export default function Demo({ firstName }: DemoProps) {
  const [count, setCount] = useState<number>(0);
  firstName;

  function handleClick() {
    setCount(() => {
      return Math.floor(Math.random() * 100);
    });
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Click</button>
      <section>
        <form onSubmit={(e) => {}}></form>
        <input type="text" onChange={(e) => {}} />
        <button onClick={(e) => {}}>Button</button>
      </section>
    </>
  );
}
