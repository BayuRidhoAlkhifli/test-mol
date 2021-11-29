import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';

const landingPage = {
  position: "relative",
  maxWidth: 480,
  width: '100%',
  margin: 'auto auto',
  boxSizing: 'border-box',
  padding: '20px 16px 80px',
  borderRight: '1px solid rgb(0 0 0 / 9%)',
  borderLeft: '1px solid rgb(0 0 0 / 9%)'

}

function App() {
  return (
    <div style={landingPage}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/dashboard"exact element={<Dashboard />} />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;
