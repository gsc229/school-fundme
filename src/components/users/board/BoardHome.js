import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';

export default function BoardHome(props) {

  const [schools, setSchools] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {

    axiosWithAuth()
      .get(`/users`)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log("Error: ", err);
      })

    axiosWithAuth()
      .get(`/schools`)
      .then(res => {
        setSchools(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      })


  }, [])

  return (
    <div>
      <h1>Hello {props.firstName}</h1>
      <div className="prim-home-container">
        <div className="list-container">
          <h3>Schools</h3>
          <div className="schools-list prim-list">
            {
              schools.map(school => (
                <div key={school.school_id} className="school-card prim-card">
                  <h5>{school.school_name}</h5>
                </div>
              ))
            }

          </div> {/* schools-list */}
        </div> {/*list-container  */}

        <div className="list-container">
          <h3>People: </h3>
          <div className="users-list prim-list ">

            {
              users.map(user => (
                <div key={user.user_id} className="user-card prim-card">
                  <h4>{user.first_name} {user.last_name}</h4>
                  <p>username: {user.username}</p>
                  {user.board && <h5>Access: Board Member</h5>}
                  {user.primary_admin && <h5>Access: Primary Administrator</h5>}
                  {user.sec_admin && <h5>Access: Secondary Administrator</h5>}
                </div>
              ))
            }

          </div>{/* users-list */}
        </div>  {/*list-container  */}

      </div>

    </div>
  )
}
