import React, { useEffect, useState } from 'react'
import './Home.css'
import ParenComponent from '../../components/ParenComponent'
import ListUser from '../../components/ListUser'
import { getUsers } from '../../services/api/User'
import LifecycleDemoComponent from '../../components/LifecycleDemoComponent'

function Home() {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers()
        setUser(response)
               
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])  

  return (
    <div style={{border: '1px solid red', padding: '10px', backgroundColor: 'black'}}>
        <ParenComponent />
        {/* {user && <ListUser user={user} />} */}
        <LifecycleDemoComponent />

    </div>
  )
}

export default Home