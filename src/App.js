import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import DemoContainer from './containers/DemoContainer'
import Footer from './components/Footer'

const useStyles = makeStyles(theme => ({
  titleContainer : {
    marginTop     : 100, 
    marginBottom  : 100, 
    textAlign     : "center"
  },
  subTitleContainer : {
    marginBottom  : 60,
    marginTop     : 60,
    textAlign     :"center",
  },
  title : {
    fontSize      : 48,
    fontWeight    : 700,
  },
  subTitle : {
    fontSize      : 24,
    fontWeight    : 600,
  },
  secondaryText : {
    fontSize      : 16,
    color         : "#888",
  },
}))

function App() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>
            Wrtn, Editor
          </Typography>
          <Typography className={classes.secondaryText}>
            created by seungwoo han
          </Typography>
          <Typography className={classes.secondaryText}>
            based on Material-ui
          </Typography>
        </div>
        <div className={classes.subTitleContainer}>
          <Typography className={classes.subTitle}>
            Demo
          </Typography>
        </div>
        <DemoContainer />
        <div className={classes.subTitleContainer}>
          <Typography className={classes.subTitle}>
            UI Reference
          </Typography>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
