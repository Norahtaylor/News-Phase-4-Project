import {useState} from 'react'
import React from 'react'
import { useNavigate } from 'react-router'
// import Form from 'react-bootstrap/Form';

function Signup({updateUser}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            firstName,
            lastName,
            username,
            password
        }

        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        navigate('/')
                    })
                 } 
                //  else {
                //     res.json().then((err) => setErrors(err.errors));
                // }
            })
            setFirstName('')
            setLastName('')
            setUsername('')
            setPassword('')
         
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e => setFirstName(e.target.value))}
                />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" 
                onChange={(e => setLastName(e.target.value))}
                value={lastName}/>
            </div>
            <div className="mb-3">
                <label>Username</label>
                <input
                    type="username"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e => setUsername(e.target.value))}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e => setPassword(e.target.value))}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
            </p>
        </form>
  )
}

export default Signup