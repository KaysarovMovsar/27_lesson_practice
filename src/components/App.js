import { Users } from './Users';
import { Todos } from './Todos';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUsers } from '../redux/action';
import { Route, Routes } from 'react-router-dom';
import { Button } from './Button';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/:id?"
          element={
            <div className="container">
              <div>
                <Users />
              </div>
              <div>
                <Todos />
              </div>
            </div>
          }
        />
      </Routes>
      <div className="button_container">
        <Button
          size="small"
          onClick={() => console.log("Small button's click")}
        >
          Click small button
        </Button>
        <Button onClick={() => console.log("Medium button's click")}></Button>
        <Button
          size="large"
          onClick={() => console.log("large button's click")}
        >
          Click large button
        </Button>
      </div>
    </div>
  );
}

export default App;
