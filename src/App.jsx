import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        <h1 className="text-9xl underline">Hello</h1>
      </div>
    </>
  );
}

export default App;
