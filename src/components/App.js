import { Users } from './Users'
import { Todos } from './Todos'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadUsers } from '../redux/action'
import { Route, Routes } from 'react-router-dom'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/:id?" element={
          <div className="container">
            <div>
              <Users/>
            </div>
            <div>
              <Todos/>
            </div>
          </div>
        }/>
      </Routes>

    </div>
  )
}

export default App
