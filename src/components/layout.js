import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const matches = useMediaQuery("(max-width:767px)")

  const rootStyle = {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`,
  }

  const rootStyleSP = {
    margin: `0`,
    padding: `0`,
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={matches ? rootStyleSP : rootStyle}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://peperomia.app/">ペペロミア</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
