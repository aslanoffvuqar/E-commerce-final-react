import React from "react";
import Navstyles from "./nav.module.css";
import "../NavBar/navMedia.css";
import "./nav.css";

import { Link } from "react-router-dom";
import "boxicons";

import Input from "./Folder-Input/Input";
import Favorites from "./Folder-Favorites/Favorites";
import Basket from "./Folder-Basket/Basket";
// import Language from "../HeaderBar/Folder-Language/Language";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container" id={Navstyles.container}>
        <nav className={Navstyles.nav}>
          <Link className={Navstyles.nav_h1} to="/Home">
            {t("Exclusive")}
          </Link>
          <ul className={Navstyles.navBar}>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/Home">
                {t("home")}
              </Link>
            </li>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/Contact">
                {t("contact")}
              </Link>
            </li>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/About">
                {t("About")}
              </Link>
            </li>
            <li className={Navstyles.navBar_li}>
              <Link className={Navstyles.navBar_a} to="/Login">
                {t("Sign Up")}
              </Link>
            </li>
          </ul>
          <div className={Navstyles.allInputBox}>
            <Input />
            <div className={Navstyles.HeartShoppingIcon}>
              <Favorites />
              <Basket />
            </div>
          </div>
          {/* <Language/> */}
          <select
            className={Navstyles.selectHeader}
            id={Navstyles.selectHeader}
          >
            <option value="0">En</option>
          </select>
        </nav>
      </div>

      <hr className={Navstyles.HrFooter} />
    </>
  );
}

export default Nav;
