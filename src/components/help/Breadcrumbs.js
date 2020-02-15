import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import { Link } from "gatsby"

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
        {props.items.map((item, index) => {
          if (!item.to) {
            return <Text>{item.label}</Text>
          }

          return (
            <Link
              key={index}
              color="inherit"
              to={item.to}
              className={classes.link}
            >
              {item.label}
            </Link>
          )
        })}
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

const Text = styled.div`
  color: #666;
  font-size: 0.7rem;
`

export default HelpBreadcrumbs
