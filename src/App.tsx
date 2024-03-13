import "./App.css";
import Demo from "./components/Demo";
function App() {
  return (
    <>
      <h1>Welcome to TypeScript!</h1>
      <img
        src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png"
        alt="TypeScript Logo"
        className="logo"
      />
      <Demo firstName="firstName" />
    </>
  );
}

export default App;
