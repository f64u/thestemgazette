import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./footer.module.scss"
import logo from "../../../assets/logo.svg"

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img
            src={logo}
            alt="stem egypt logo"
            width="80"
            height="80"
            className={styles.logo}
          />
        </div>
        <div className={styles.rightSide}>
          <ul>
            <li>
              <a href="https://twitter.com">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                  className={styles.icon}
                />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <FontAwesomeIcon
                  icon={["fab", "instagram-square"]}
                  className={styles.icon}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
