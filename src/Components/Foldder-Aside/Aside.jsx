import React from "react";
import styles from "../Foldder-Aside/aside.module.css";
import "../Foldder-Aside/aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider/Slider";
// import img from "../Foldder-Aside/Aside-Img/Frame 560.png";

// import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";

function Aside() {
  return (
    <>
      <div className="container">
        <div className="flex w-full gap-20">
          <aside className={styles.asideBox}>
            <div className={styles.allBox}>
              <div className={styles.asideDiv}>
                <a className={styles.a} href="#">
                  Woman’s Fashion
                  <span className={styles.a_icon}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </a>
                <a className={styles.a} href="#">
                  Men’s Fashion
                  <span className={styles.a_icon2}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </a>
                <a className={styles.a} href="#">
                  Electronics
                </a>
                <a className={styles.a} href="#">
                  Home & Lifestyle
                </a>
                <a className={styles.a} href="#">
                  Medicine
                </a>
                <a className={styles.a} href="#">
                  Sports & Outdoor
                </a>
                <a className={styles.a} href="#">
                  Baby’s & Toys
                </a>
                <a className={styles.a} href="#">
                  Groceries & Pets
                </a>
                <a className={styles.a} href="#">
                  Health & Beauty
                </a>
              </div>
              <div className={styles.Line}></div>
            </div>
          </aside>
          <Slider />
        </div>
        {/* ****************** Mobil*************************** */}
        <div className={styles.mediaIconAndImput}>
          <FontAwesomeIcon icon={faBars} className={styles.iconBars} />
          <div className={styles.inputDivNav} id={styles.inputDivNav}>
            <input
              className={styles.inputDivNav_input}
              id={styles.inputDivNav_input}
              type="text"
              placeholder="What are you looking for?"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className={styles.searchIcon}
              id={styles.searchIcon}
            />
          </div>
          <div
            className={styles.HeartShoppingIcon}
            id={styles.HeartShoppingIcon}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.HeartIcon}
              id={styles.HeartIcon}
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className={styles.ShoppinghIcon}
              id={styles.ShoppinghIcon}
            />
          </div>
        </div>
        {/* ****************** Mobil*************************** */}
      </div>
    </>
  );
}

export default Aside;
