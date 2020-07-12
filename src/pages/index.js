import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Breadcrumbs from "../components/help/Breadcrumbs"

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#fff",
    padding: "1rem",
  },
}))

const breadcrumbItems = [{ label: "ペペロアヘルプセンター" }, { label: "TOP" }]

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Help" />
      <Breadcrumbs items={breadcrumbItems} />

      <Card className={classes.card}>
        <CardContent>
          <Title>ペペロミア</Title>
          <br />

          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} md={6}>
              <Category>全体向け</Category>
              <LinkUL>
                <li>
                  <Link to="/general/account/" className="help-link">
                    ユーザー登録とは
                  </Link>
                </li>
                <li>
                  <Link to="/general/notification/" className="help-link">
                    通知設定とは
                  </Link>
                </li>
                <li>
                  <Link to="/general/share/" className="help-link">
                    予定共有とは
                  </Link>
                </li>
              </LinkUL>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  )
}

const Title = styled.h2`
  font-size: 24px;
  color: #666;
`

const Category = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #666;
  padding-bottom: 0.5rem;
`

const LinkUL = styled.ul`
  font-size: 14px;
  color: #668ad8;

  li {
    margin-bottom: 0.2rem;
  }
`

export default IndexPage
