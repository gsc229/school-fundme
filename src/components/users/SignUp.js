import React from 'react'
import { useInput } from '../../hooks/useIput';
import axiosWithAuth from '../../utils/axiosWithAuth';

export default function SignUp(props) {

  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");
  const [firstName, setFirstName, handleFirstName] = useInput("");
  const [lastName, setLastName, handleLastName] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");
  const [city, setCity, handleCity] = useInput("");
  const [state, setState, handleState] = useInput("");
  /*  const [board, setBoard, handleBoard] = useInput(false);
   const [primaryAdmin, setPrimaryAdmin, hanldePrimaryAdmin] = useInput("");
   const [secAdmin, setSecAdmin, hanldeSecAdmin] = useInput(""); */
  const [role, setRole, handleRole] = useInput("");
  console.log(role);

  const newUser = {
    username: username,
    password: password,
    first_name: firstName,
    last_name: lastName,
    email: email,
    city: city,
    state: state,
    board: role === 'board' ? true : false,
    primary_admin: role === 'primary_admin' ? true : false,
    sec_admin: role === 'sec_admin' ? true : false,

  }


  const signUp = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/auth/register`, newUser)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('token', token)
        console.log(res.data);
        if (res.data.board) {
          props.setAccess("board")
          props.setFirstName(res.data.first_name)
        } else if (res.data.primary_admin) {
          props.setAccess("primary_admin")
          props.setFirstName(res.data.first_name)
        } else {
          props.setAccess('sec_admin')
          props.setFirstName(res.data.first_name)
        }
      })
      .catch(err => {
        console.log("Error: ", err)
      })


  }


  console.log("SignUp newUser: ", newUser);

  return (
    <div>
      <h1>SIgnup</h1>
      <form action="" className="issue-form">
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

        <label htmlFor="first_name">First Name:</label>
        <input
          value={firstName}
          onChange={e => handleFirstName(e.target.value)}
          name="first_name" type="text" />

        <label htmlFor="last_name">Last Name:</label>
        <input
          value={lastName}
          onChange={e => handleLastName(e.target.value)}
          name="last_name" type="text" />

        <label htmlFor="email">Email: </label>
        <input
          value={email}
          onChange={e => handleEmail(e.target.value)}
          name="email" type="email" />

        <label htmlFor="city">City: </label>
        <input
          value={city}
          onChange={e => handleCity(e.target.value)}
          name="city" type="text" />


        <label htmlFor="state">State: </label>
        <input
          value={state}
          onChange={e => handleState(e.target.value)}
          name="state" type="text" />


        <div className="role-container">
          <div className="radio-inputs">
            <label htmlFor="completed">Board Member</label>
            <input
              onChange={e => handleRole(e.target.value)}
              name="role" id="completed" type="radio" value="board" />
          </div>
          <div className="radio-inputs">
            <label htmlFor="needs_attention">Primary Administrator</label>
            <input
              onChange={e => handleRole(e.target.value)}
              name="role" id="needs_attention" type="radio" value="primary_admin" />
          </div>
          <div className="radio-inputs">
            <label htmlFor="schedueld">Administrator</label>
            <input
              onChange={e => handleRole(e.target.value)}
              name="role" id="scheduled" type="radio" value="sec_admin" />
          </div>
        </div>
        <input type="submit" onClick={signUp} />
        <div className="signup-to-login">
          <p>Already registered? </p>
          <button onClick={() => props.history.push('/login')}>Go to login</button>
        </div>
      </form>
    </div>
  )
}
