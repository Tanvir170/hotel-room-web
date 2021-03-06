import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Hdeader/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
