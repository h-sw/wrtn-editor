import React from 'react'
import produce from 'immer'
import WrtnBlock from '../components/WrtnBlock'
import useStyles from '../styles/blockStyles'
import { defaultBlockDTO } from '../utils/blockDTO'

export default function BlockContainer(){
  const classes = useStyles()
  const [currentCursorIdx, setCurrentCursorIdx] = React.useState(0)
  const [rowData, setRowData] = React.useState([
    defaultBlockDTO(
      Math.random().toString(36).substr(2,7), 
      'block based markdown editor', 
      classes.default
    )
  ])

  React.useEffect(() => {
    document.getElementById(rowData[currentCursorIdx].id).focus()
  }, [rowData])

  const addRow = (id) => {
    const newRow = defaultBlockDTO(
      Math.random().toString(36).substr(2,7), 
      '', 
      classes.default
    )
    const index = rowData.findIndex(data => (data.id === id))
    setRowData(
      produce(rowData, draft => {
        draft.splice(index+1, 0, newRow)
      })
    )
    setCurrentCursorIdx(index+1)
  }

  const deleteRow = (idx) => {
    if(idx > 0){
      setCurrentCursorIdx(idx - 1)
      setRowData(
        produce(rowData, draft => {
          draft.splice(idx, 1)
        })
      )
    }
  }

  const cursorUp = (idx) => {
    if(idx > 0 ){
      document.getElementById(rowData[idx-1].id).focus()
      setCurrentCursorIdx(idx -1)
    }
  }

  const cursorDown = (idx) => {
    if(idx < rowData.length - 1){
      document.getElementById(rowData[idx+1].id).focus()
      setCurrentCursorIdx(idx +1)
    }
  }

  const handleRowData = ( target, value ) => {
    setRowData(
      produce(rowData, draft => {
        const index = draft.findIndex(data => data.id === target.id)
        if(index !== -1){
          if(value !== null){
            draft[index].text = value
          }else{
            draft[index].text = target.value
          }
        }
      })
    )
  }

  return(
    <div>
      {rowData.map((item, idx) => {
        return (
          <WrtnBlock 
            key={item.id} 
            addRow={addRow} 
            deleteRow={() => deleteRow(idx)} 
            row={item} 
            setRow={handleRowData} 
            setCurrentCursor={() => setCurrentCursorIdx(idx)} 
            cursorUp={() => cursorUp(idx)}
            cursorDown={() => cursorDown(idx)}
          />
        )
    })}
    </div>
  )
}