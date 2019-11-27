import React from 'react'
import { useInput } from '../../hooks/useIput';
import axiosWithAuth from "../../utils/axiosWithAuth";
import { setUser } from '../../redux/actions';
import { connect } from 'react-redux'
import jwt from 'jsonwebtoken';

function Login(props) {

  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");


  const user = {
    username: username,
    password: password
  };


  const signIn = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/auth/login`, user)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('token', token)
        const user = res.data;
        localStorage.setItem('user', JSON.stringify(user))
        if (res.data.board) {
          props.history.push('/board-home')
        } else if (res.data.primary_admin) {
          props.setUser(res.data)

          props.history.push('/primary-home')
        } else {
          props.history.push('/sec-home')
        }
        console.log("Login res.data: ", res.data);

      })
      .catch(err => {
        console.log("Error: ", err)
      })
  }


  return (
    <div>
      <h1>Login</h1>
      <div className="login-container">
        <form className="login-form" action="">
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            onChange={e => handleUsername(e.target.value)}
            name="username" type="text" />

          <label htmlFor="password">password:</label>
          <input
            value={password}
            onChange={e => handlePassword(e.target.value)}
            name="password" type="password" />
          <input type="submit" onClick={signIn} />
        </form>
      </div>
      <div className="login-to-signup">
        <p>No registered yet? </p>
        <button onClick={() => props.history.push('/sign-up')}>Sing Up</button>
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}


export default connect(mapStateToProps, { setUser })(Login);