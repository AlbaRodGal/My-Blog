import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding:`30px 30px`,
      borderBottom:`1px solid #ddd`,
      fontSize: `20px`,
    }}
  >
    <h1>
      <Link
        className="header-text"
        to="/"
        style={{
          color: `#BF7E45`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav
    style={{textAlign: `right`}}
    >
      <Link to="/about">About</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
