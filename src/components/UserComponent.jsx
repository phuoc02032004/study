import React from 'react'
import { useUser } from '../context/UserContext';

function UserComponent() {
    const userName = useUser();

  return (
    <div>
          <p>Xin chào, {userName}!</p>
    </div>
  )
}

export default UserComponent
