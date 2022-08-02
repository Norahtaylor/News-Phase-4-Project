import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login({updateUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    let navigate = useNavigate()

    function handelSubmit(e){
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(r => {
            if(r.ok) {
                r.json().then(user => updateUser(user))
                navigate('/profile')
            } 
            // else {
            //     r.json().then((err) => setErrors(err.errors))
            // }
        })
        setUsername('')
        setPassword('')
    }



  return (
    <div>

      <form onSubmit={handelSubmit}>
          <h3>Sign In</h3>
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
          <div className="mb-3">
              <div className="custom-control custom-checkbox">
                  <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                      Remember me
                  </label>
              </div>
          </div>
          <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                  Submit
              </button>
          </div>
          {/* <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
          </p> */}
          
            {/* {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                      {errors.map((error) => (
                          <li key={error}>{error}</li>
                      ))}
                 </ul>)}  */}

      </form>
    </div>
  )
}

export default Login