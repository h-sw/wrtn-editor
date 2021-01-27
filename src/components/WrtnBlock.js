import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import blockStyles from '../styles/blockStyles'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

const WrtnBlock = ({ addRow, deleteRow, setRow, row, setCurrentCursor, cursorUp, cursorDown }) => {
  const classes = blockStyles();
  const [inputStyle, setInputStyle] = React.useState(classes.default)
  const [openPopover, setOpenPopover] = React.useState(false)

  const handleInput = (e) => {
    const target = e.target
    const ctx = target.value
    const spaceIdx = ctx.toString().indexOf(" ")

    if((ctx.match(/\n/g)||[]).length > 0){
      addRow(row.id)
    }else{
      setRow(target, ctx)
    }

    if(spaceIdx !== -1){
      const firstParam = ctx.toString().substring(0, spaceIdx)
      if(firstParam === "#"){
        setInputStyle(classes.h1)
        setRow(target, "")
        return;
      }else if(firstParam === "##"){
        setInputStyle(classes.h2)
        setRow(target, "")
        return;
      }else if(firstParam === "###"){
        setInputStyle(classes.h3)
        setRow(target, "")
        return;
      }
    }
  }

  const handleInputKeyPress = (e) => {
    if(e.key === "Backspace"){
      if(row.text === ""){
        if(inputStyle === classes.default){
          deleteRow()
        }else{
          setInputStyle(classes.default)
        }
      }
    }else if(e.key === "ArrowUp"){
      cursorUp()
    }else if(e.key === "ArrowDown"){
      cursorDown()
    }
  }

  const handleFocus = (e) => {
    setCurrentCursor()
    setOpenPopover(true)
  }

  const handleClosePopover = (e) => {
    setOpenPopover(false)
  }

  return(
    <div style={{display:'flex'}}>
      <DragIndicatorIcon style={{visibility: openPopover ? 'visible' : 'hidden', fill:'#999', height: 32}} />
      <InputBase
        id={row.id}
        placeholder={openPopover ? "write anything... this is wrtn " : null}
        className={inputStyle} 
        multiline
        onChange={handleInput} 
        value={row.text} 
        onKeyDown={handleInputKeyPress} 
        onFocus={handleFocus}
        onBlur={handleClosePopover}
      />
    </div>
  )
}

export default WrtnBlock