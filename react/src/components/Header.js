import "../components/styles/header.scss";
import logo from "../logo.svg";
import { useState } from "react";

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <NavBar />
    </header>
  );
}

function Logo() {
  const [isActive, setIsActive] = useState(false);
  const stopRotate = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="logo">
      <img
        src={logo}
        className={isActive ? "logo-stop" : "logo-react"}
        alt="logo"
        onClick={stopRotate}
      />

      <span className="logo-tag" onClick={stopRotate}>
        {" "}
        Clik to start rotation{" "}
      </span>
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li>About</li>
        <li> Home</li>
        <li> Contacts</li>
      </ul>
    </nav>
  );
}
