import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import FeedSVG from "../../Assets/FeedSVG";
import EstatisticasSVG from "../../Assets/EstatisticasSVG";
import AdicionarSVG from "../../Assets/AdicionarSVG";
import SairSVG from "../../Assets/SairSVG";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const navigate = useNavigate();

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/conta");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
