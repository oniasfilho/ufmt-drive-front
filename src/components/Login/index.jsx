import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Signup from '../Signup'
import axios from 'axios'
import './index.css'

const Login = (props) => {
  const styleCadastrar = {
    fontSize: '12px',
    color: 'grey',
    padding: '5px',
  }

  const linkStyle = {
    margin: '10px',
  }

  const styleSubmitButton = {
    margin: '10px',
  }

  const [signIn, setSignIn] = useState(true)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function validateForm() {
    return username.length > 0 && password.length > 0
  }

  const handleSubmit = async (event) => {
    if (!signIn) {
      const res = await axios({
        method: 'post',
        url: '/api/note',
        // data: note,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '.concat(user.token),
        },
      })
    }

    const user = {
      username,
      password,
    }
    props.signIn(user)
    event.preventDefault()
  }

  const switchToLogin = () => {
    setSignIn(true)
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        {signIn ? (
          <>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              style={styleSubmitButton}
              block
              size="lg"
              type="submit"
              disabled={!validateForm()}
            >
              {signIn ? 'login' : 'sign up'}
            </Button>
            <span style={styleCadastrar}>
              don't have an account?
              <a style={linkStyle} href="#" onClick={() => setSignIn(false)}>
                register
              </a>
            </span>
          </>
        ) : (
          <Signup switchToLogin={switchToLogin} />
        )}
      </Form>
    </div>
  )
}

export default Login
