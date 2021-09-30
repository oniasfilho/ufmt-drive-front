import { React, useState } from 'react'

const CreateNote = (props) => {
  const [note, setNote] = useState({
    note_title: '',
    note_description: '',
    // user_id: '3',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }

  function submitNote(event) {
    event.preventDefault()
    if (note.note_title !== '' || note.note_description !== '') {
      if (
        note.note_title.trim() !== '' ||
        note.note_description.trim() !== ''
      ) {
        props.addNote(note)
        setNote({
          note_title: '',
          note_description: '',
          // user_id: '3',
        })
      }
    }
  }

  return (
    <div>
      <form>
        <input
          name="note_title"
          onChange={handleChange}
          value={note.note_title}
          placeholder="Title"
        />
        <textarea
          name="note_description"
          onChange={handleChange}
          value={note.note_description}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  )
}

export default CreateNote
