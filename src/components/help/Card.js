import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#F1F5F8",
  },
}))

const HelpCard = props => {
  const classes = useStyles()

  return (
    <>
      <h3>{props.titile}</h3>
      <Card className={classes.card}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </>
  )
}
HelpCard.propTypes = {
  titile: PropTypes.string,
  children: PropTypes.node.isRequired,
}

HelpCard.defaultProps = {
  titile: "",
}

export default HelpCard
