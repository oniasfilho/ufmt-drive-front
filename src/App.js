import Login from './components/Login/'
import Header from './components/Header'
import Note from './components/Note'
import CreateNote from './components/CreateNote'
import Footer from './components/Footer'
import axios from 'axios'
import { useState, useEffect } from 'react'
import cookie from 'react-cookie'

const App = () => {
  const [atualiza, setAtualiza] = new useState(0)
  const [notes, setNotes] = new useState([])
  const [user, setUser] = new useState({
    username: '',
    password: '',
    token: '',
  })
  const [logado, setLogado] = new useState(false)

  const logoff = () => {
    window.localStorage.clear()
    setLogado(false)
    setAtualiza((oldVal) => oldVal + 1)
    window.location.reload(true)
  }

  useEffect(() => {
    if (localStorage.getItem('isLogado') != null) {
      setLogado(true)
      getNotes()
    } else {
      setLogado(false)
    }
  }, [atualiza])

  const recebeUser = async (user_data) => {
    window.localStorage.clear()
    await setUser(user_data)
    await login()
    await getNotes()
    await setAtualiza((oldVal) => oldVal + 1)
  }

  const login = async () => {
    try {
      const username = user.username
      const password = user.password
      const res = await axios.post('/login', {
        username,
        password,
      })
      const token = await res.data.token
      localStorage.setItem('isLogado', token)
      setUser((oldVal) => {
        return {
          ...oldVal,
          token,
        }
      })
      localStorage.setItem('username', user.username)
      localStorage.setItem('password', user.password)
      setLogado(true)
    } catch (error) {
      setLogado(false)
    }
  }

  const getNotes = async () => {
    try {
      const res = await axios.get('/api/note', {
        headers: {
          Authorization: 'Bearer '.concat(localStorage.getItem('isLogado')),
        },
      })

      console.log('CHEGOU AQUI')
      setNotes(res.data)
    } catch {
      console.log('nao conseguiu pegar as notas')
    }
  }

  const addNote = async (note) => {
    const res = await axios({
      method: 'post',
      url: '/api/note',
      data: note,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(user.token),
      },
    })

    setAtualiza((oldValue) => oldValue + 1)
  }

  const deleteNote = async (id) => {
    const res = await axios({
      method: 'delete',
      url: '/api/note/'.concat(id),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(user.token),
      },
    })
    setAtualiza((oldValue) => oldValue + 1)
  }

  return (
    <>
      {logado ? (
        <>
          <Header logoff={logoff} />
          <CreateNote addNote={addNote} />
          {notes.length > 0
            ? notes.map((note) => (
                <Note key={note.note_id} note={note} deleteNote={deleteNote} />
              ))
            : null}
          <Footer />{' '}
        </>
      ) : (
        <Login signIn={recebeUser} />
      )}
    </>
  )
}

export default App
