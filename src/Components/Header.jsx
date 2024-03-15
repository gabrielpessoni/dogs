import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DogsSVG from "../Assets/DogsSVG";
import { UserContext } from "../Contexts/UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to={"/"} aria-label="Dogs - Home">
          <DogsSVG />
        </Link>
        {data ? (
          <Link className={styles.login} to={"/conta"}>
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to={"/login"}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
