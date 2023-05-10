import React from "react";
import styles from "../Navbar/Navbar.module.css";

const NavbarResponsive = ({ hamActive ,setHamActive  }) => {
  const handleClick = () => {
    setHamActive(!hamActive);
  };
  
  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div  className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <a href="/" className={`${styles.navR} center`} onClick={handleClick}>
              Departments
            </a>
          </li>
          <li>
            <a href="#features" className={`${styles.navR} center`} onClick={handleClick}>
              Events/products
            </a>
          </li>
          <li>
            <a href="#footer" className={`${styles.navR} center`} onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
        <select className={styles.navRdropDown} name="" id="">
          <span className="flag-icon flag-icon-us"></span>{" "}
          <option value="US">United States</option>
          <span className="flag-icon flag-icon-in"></span>{" "}
          <option value="IN">India </option>
        </select>
      </div>
    </div>
  );
};

export default NavbarResponsive;
