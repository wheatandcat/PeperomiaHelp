import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"

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
}))

const HelpBreadcrumbs = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {props.items.map(item => (
          <Link
            key={item.lable}
            color="inherit"
            href="/getting-started/installation/"
            className={classes.link}
          >
            {item.label}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}

HelpBreadcrumbs.propTypes = {
  items: PropTypes.array,
}

HelpBreadcrumbs.defaultProps = {
  items: [],
}

export default HelpBreadcrumbs
