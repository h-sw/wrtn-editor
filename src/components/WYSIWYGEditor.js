import React from 'react'
import ContentEditable from 'react-contenteditable'

export default function WISYWIGEditor(){
  const text = React.useRef('<div>classic type of wysiwyg editor.</div>');

  const handleChange = evt => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(text.current);
  };

  return(
    <ContentEditable
      tagName='wrtn-editor'
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={false}
      style={{
        width: '100%',
        minHeight: '500px',
        resize: 'none',
        display:'block',
        position:'relative',
      }}
    /> 
  )
}