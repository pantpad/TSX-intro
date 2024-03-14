import "./Header.css";

export default function Header() {
  return (
    <header
      className="fade-up"
      onAnimationStart={() => {
        window.scrollTo(0, 0);
      }}
    >
      <h1>Welcome to TypeScript!</h1>
      <img
        src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png"
        alt="TypeScript Logo"
      />
    </header>
  );
}
