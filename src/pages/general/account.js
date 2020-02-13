import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"

import Card from "@material-ui/core/Card"

import CardContent from "@material-ui/core/CardContent"
import Layout from "../../components/layout"
import Help from "../../help/general/account"

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    fontSize: "12px",
    color: "#158ec2",
  },
  card: {
    backgroundColor: "#F1F5F8",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" className={classes.link}>
            ペペロアヘルプセンター
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            className={classes.link}
          >
            全体向け
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            className={classes.link}
          >
            新規登録・ログインについて
          </Link>
        </Breadcrumbs>
      </div>

      <h3>会員登録について</h3>
      <Card className={classes.card}>
        <CardContent>
          <Help />
        </CardContent>
      </Card>
    </Layout>
  )
}

export default IndexPage
