import React from "react"

import "../../styles/footer.scss"

const Footer = ({ title }) => (
  <footer>
    { title } {new Date().getFullYear()}
  </footer>
)

export default Footer