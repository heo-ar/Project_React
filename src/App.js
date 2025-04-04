import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import MListPage from './pages/member/MListPage';
import LoginPage from './pages/LoginPage';
import InquiryListPage from './pages/InquiryListPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Mlist" element={<MListPage />} />
        <Route path="/InquiryList" element={<InquiryListPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}

export default App;
