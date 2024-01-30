import { FC, useEffect, useState } from "react";
import Navbar from "../Navbar";
import styles from "./Header.module.css";

const Header: FC = (): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`${styles.header} ${
        scrollPosition > 100 ? styles["hidden"] : ""
      }`}
    >
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
