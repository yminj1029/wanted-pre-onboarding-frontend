import './App.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ToDoPage from './pages/ToDoPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='App-header'>TODO</div>
      <Routes>
        {/* 회원가입 */}
        <Route element={<SignUpPage/>} exact path='/signup'></Route>      
        {/* 로그인 */}
        <Route element={<SignInPage/>} exact path='/signin'></Route>
        {/* todo 리스트 */}
        <Route element={<ToDoPage/>} exact path='/todo'></Route>            
      </Routes>

    </div>
  );
}

export default App;
