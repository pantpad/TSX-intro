import { useEffect, useState } from "react";

type DemoProps = {
  firstName: string;
};

export default function Demo({ firstName }: DemoProps) {
  const [count, setCount] = useState<number>(0);
  firstName;

  function handleCount(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e);
    setCount(() => {
      return Math.floor(Math.random() * 100);
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.target);
  }

  function fetchUsers(
    userId: number,
    fetchOptions: { staleTime: number | undefined }
  ): { id: number } {
    return { id: userId, ...fetchOptions };
  }

  useEffect(() => {
    const user = fetchUsers(1, { staleTime: 1000 });
    console.log(user);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button
        onClick={(e) => {
          handleCount(e);
        }}
      >
        Click
      </button>
      <section>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Button
          </button>
        </form>
      </section>
    </>
  );
}
