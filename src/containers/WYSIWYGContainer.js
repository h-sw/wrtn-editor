import React from 'react'
import WYSIWYGEditor from '../components/WYSIWYGEditor'
import Button from '@material-ui/core/Button'
import FormatBold from '@material-ui/icons/FormatBold'

export default function WYSIWYGContainer(){
  return(
    <div>
      <div style={{display:'flex', width:'100%', borderBottom:'1px solid #CCC'}}>
        <Button 
          onMouseDown={e => {
            e.preventDefault()
            document.execCommand("bold", false, null)
          }
        }>
          <FormatBold />
        </Button>
      </div>
      <WYSIWYGEditor />
    </div>
  )
}