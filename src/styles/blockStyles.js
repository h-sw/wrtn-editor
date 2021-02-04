import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  h1 : {
    fontSize    : 48,
    fontWeight  : 700,
    minHeight   : 20,
    width       : '100%',
    color       : '#444',
  },
  h2 : {
    fontSize    : 32,
    fontWeight  : 600,
    minHeight   : 20,
    width       : '100%',
    color       : '#444',
  },
  h3 : {
    fontSize    : 24,
    fontWeight  : 600,
    minHeight   : 20,
    width       : '100%',
    color       : '#444',
  },
  default : {
    fontSize    : 16,
    fontWeight  : 500,
    minHeight   : 20,
    width       : '100%',
    color       : '#444',
  },
  editor : {
    width:'100%',
    minHeight: 100
  }
}))

export default useStyles