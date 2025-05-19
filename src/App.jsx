import { useState } from 'react'
import './App.css'
import Home from './page/Home/Home'
import { UserProvider } from './context/UserContext'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
    <Provider store={store}>
      <Home />
    </Provider>
    </UserProvider>
    </>
  )
}

export default App
