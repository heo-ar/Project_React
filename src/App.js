import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';

function App() {
  return (
      <Routes>
        
        <Route path="/" element={<IndexPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
  );
}

export default App;
