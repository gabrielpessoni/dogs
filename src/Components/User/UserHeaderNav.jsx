import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import FeedSVG from "../../Assets/FeedSVG";
import EstatisticasSVG from "../../Assets/EstatisticasSVG";
import AdicionarSVG from "../../Assets/AdicionarSVG";
import SairSVG from "../../Assets/SairSVG";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/conta");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <FeedSVG />
        {mobile && "Minhas Fotos"}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        <EstatisticasSVG /> {mobile && "Estatísticas"}
      </NavLink>

      <NavLink to="/conta/postar">
        <AdicionarSVG /> {mobile && "Adicionar Foto"}
      </NavLink>

      <button onClick={handleLogout}>
        <SairSVG />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
