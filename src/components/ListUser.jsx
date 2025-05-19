import React from 'react'

function ListUser({ user }) {
  return (
    <div>
      {user && user.map((user) => (
        <div key={user.id} style={{ border: '1px solid red', padding: '10px', backgroundColor: 'black', color: 'white' }}>
        
          <h3>Thông tin người dùng</h3>
          <p>ID: {user.id}</p>
          <p>Tên: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default ListUser
