import { useState } from 'react'
import './App.css'
import Home from './page/Home/Home'
import UserContext from './context/UserContext'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('Test User')

  return (
    <>  
    {/* <UserContext.Provider value={username}> */} {/*Vi du Context*/}
    <Provider store={store}> {/*Vi du Redux*/}
      <Home />
    </Provider>
    {/* </UserContext.Provider> */}
    </>
  )
}

export default App
