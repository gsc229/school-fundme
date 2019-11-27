import React from 'react'

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <h1>Home</h1>
      <div className="login-signup">
        <button onClick={() => props.history.push('/login')}>Login</button>

        <button onClick={() => props.history.push('/sign-up')}>Sign Up</button>

      </div>

    </div>
  )
}
