import './App.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ToDoPage from './pages/ToDoPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const accessToken = localStorage.getItem('token')
  return (
    <div className="App">
      <div className='App-header'>TODO</div>
      <Routes>
        {/* 회원가입 */}
        <Route element={<SignUpPage authenticated={accessToken}/>} exact path='/signup'></Route>      
        {/* 로그인 */}
        <Route element={<SignInPage authenticated={accessToken} />} exact path='/signin'></Route>
        {/* todo 리스트 */}
        <Route element={<ToDoPage authenticated={accessToken} />} exact path='/todo'></Route>

        <Route element={<NotFoundPage authenticated={accessToken}/>} exact path='*'></Route>            
      </Routes>

    </div>
  );
}

export default App;
