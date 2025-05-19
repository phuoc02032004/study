import React from 'react'
import { useUser } from '../context/UserContext';

function UserComponent() {
    const { username, setUsername }  = useUser();

  return (
    <div>
          <p>Xin chào, {username}!</p>

          <button onClick={() => setUsername('New User')}>Change Username</button>
    </div>
  )
}

export default UserComponent
