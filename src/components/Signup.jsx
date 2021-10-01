import { React, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const Signup = (props) => {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip_code: '',
    },
  })

  const linkStyle = {
    margin: '10px',
  }

  const styleSubmitButton = {
    margin: '10px',
  }

  const styleCadastrar = {
    fontSize: '12px',
    color: 'grey',
    padding: '5px',
  }

  const [confirmPass, setConfirmPass] = useState('')

  const handleSubmit = async () => {
    const res = await axios.post('/api/user', {
      newUser,
    })
  }

  const handleNewUserAlteration = (e) => {
    const { name, value } = e.target

    if (e.target.name === 'address') {
      const { id, value } = e.target

      setNewUser((oldVal) => {
        return {
          ...oldVal,
          address: {
            ...oldVal.address,
            [id]: value,
          },
        }
      })
    } else {
      setNewUser((oldVal) => {
        return {
          ...oldVal,
          [name]: value,
        }
      })
    }
  }

  return (
    <>
      <Form.Group size="lg" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={newUser.username}
          onChange={(e) => handleNewUserAlteration(e)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          autoFocus
          type="password"
          name="password"
          value={newUser.password}
          onChange={(e) => handleNewUserAlteration(e)}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          autoFocus
          type="password"
          name="password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="first_name"
          value={newUser.first_name}
          onChange={(e) => handleNewUserAlteration(e)}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="last_name"
          value={newUser.last_name}
          onChange={(e) => handleNewUserAlteration(e)}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="street">
        <Form.Label>Street Name</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="address"
          id="street"
          value={newUser.address.street}
          onChange={(e) => handleNewUserAlteration(e)}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="address"
          id="city"
          value={newUser.address.city}
          onChange={(e) => handleNewUserAlteration(e)}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="address"
          id="state"
          value={newUser.address.state}
          onChange={(e) => handleNewUserAlteration(e)}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="zip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="address"
          id="zip_code"
          value={newUser.address.zip_code}
          onChange={(e) => handleNewUserAlteration(e)}
        />

        <Button style={styleSubmitButton} block size="lg" type="submit">
          'sign up'
        </Button>
        <span style={styleCadastrar}>
          already has an account?
          <a style={linkStyle} href="#" onClick={props.switchToLogin}>
            login
          </a>
        </span>
      </Form.Group>
    </>
  )
}

export default Signup
