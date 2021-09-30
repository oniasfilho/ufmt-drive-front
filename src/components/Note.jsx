import React from 'react'

const Note = (props) => {
  let status = ''
  let buttonStyle = {
    backgroundColor: 'white',
  }
  const noteId = props.note.note_id

  return (
    <>
      <div className={`note ${status}`}>
        <h1>{props.note.note_title}</h1>
        <p>{props.note.note_description}</p>
        <button
          style={buttonStyle}
          onClick={() => {
            props.deleteNote(noteId)
          }}
        >
          delete
        </button>
      </div>
    </>
  )
}

export default Note
