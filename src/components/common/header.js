import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Search from "./search"

import styles from "./header.module.scss"

import { Link } from "gatsby"

console.log(styles)

const Header = () => {
  return (
    <header>
      <div className={styles.content}>
        <div className={styles.upper}>
          <div className={`${styles.sides} ${styles.leftSide}`}>
            <div className={styles.utils}>
              <ul>
                <li className={styles.smallItem}>
                  <Search />
                </li>
                <li className={styles.smallItem}>
                  <FontAwesomeIcon icon="bars" className={`${styles.icon}`} />
                </li>
              </ul>
            </div>
            <div className={styles.socialLinks}>
              <ul>
                <li className={styles.smallItem}>
                  <a href="https://facebook.com">
                    <FontAwesomeIcon
                      icon={["fab", "facebook-f"]}
                      className={`${styles.icon} ${styles.brand}`}
                    />
                  </a>
                </li>
                <li className={styles.smallItem}>
                  <a href="https://twitter.com">
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      className={`${styles.icon} ${styles.brand}`}
                    />
                  </a>
                </li>
                <li className={styles.smallItem}>
                  <a href="https://instagram.com">
                    <FontAwesomeIcon
                      icon={["fab", "instagram"]}
                      className={`${styles.icon} ${styles.brand}`}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${styles.center} ${styles.logo}`}>
            <span>GaZette</span>
            <span>STEM</span>
          </div>

          <div className={`${styles.sides} ${styles.rightSide}`}>
            <ul>
              <li className={styles.smallItem}>
                <FontAwesomeIcon
                  icon={["far", "calendar-alt"]}
                  className={`${styles.icon} ${styles.calendar}`}
                />
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/posts/news">New & Announcements</Link>
            </li>
            <li>
              <Link to="/posts/events">Events</Link>
            </li>
            <li>
              <Link to="/posts/awards">Awards & Honors</Link>
            </li>
            <li>
              <Link to="/posts/exchange">Exchange Programs</Link>
            </li>
            <li>
              <Link to="/posts/admissions">
                International College Admissions
              </Link>
            </li>
            <li>
              <Link to="/posts/domestic">
                Grade 12 Domestic Ranks and College Coordination
              </Link>
            </li>
            <li>
              <Link to="/posts/student-submssions">Student Submissions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
