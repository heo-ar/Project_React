import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}

export default App;
