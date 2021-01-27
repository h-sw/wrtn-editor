import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer : {
    paddingTop    : 100,
    paddingBottom : 100,
    borderTop     : "1px solid #EEE",
  },
  primary : {
    color         :'#444',
    fontWeight    : 700,
    marginBottom  : 20,
  },
  secondary : {
    color         :'#888',
    fontWeight    : 500,
    marginBottom  : 10,
  }
}))

export default function Footer(){
  const classes = useStyles();
  return(
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Typography className={classes.primary}>
              Wrtn, WYSIWYG
            </Typography>
            <Typography className={classes.secondary}>
               Github
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.primary}>
              Contributor
            </Typography>
            <Typography className={classes.secondary}>
               SeungWoo Han
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}