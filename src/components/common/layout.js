import React from "react"

import { library } from "@fortawesome/fontawesome-svg-core"

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faInstagramSquare,
  faLinkedinIn,
  faSearch,
  faBars,
  faCalendarAlt
)

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
