import React from 'react'
import Paper from '@material-ui/core/Paper'
import WYSIWYGContainer from './WYSIWYGContainer'
import BlockContainer from './BlockContainer'
import { Grid } from '@material-ui/core'

export default function DemoContainer(){
  
  return(
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={4} style={{padding: 20}}>
          <WYSIWYGContainer />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={4} style={{padding: 20, minHeight: 500}}>
          <BlockContainer />
        </Paper>
      </Grid>
    </Grid>
    
  )
}


/*
<Paper id="note" ref={containerRef} elevation={4} style={{minHeight: 500, padding: 30}}>
        
      </Paper>
*/
/*
openPopover && 
  <Paper onFocus={handleFocus} elevation={4} style={{position:'absolute', top: -30, left: 0, zIndex:999, height:20, padding: 5 }}>
    <Typography style={{fontSize: 12, color:'#888'}}>This Area is Option Area</Typography>
  </Paper>
*/