import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <UserWrapper>aaaaa</UserWrapper>
    <Link to="/general/account/">Go to page 2</Link>
    <Button variant="contained" color="secondary">
      aaaaa
    </Button>
  </Layout>
)

const UserWrapper = styled.div`
  color: red;
`

export default IndexPage
