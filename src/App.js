import logo from './logo.svg';
import './App.css';
import Sidenav from './components/Sidenav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import Earnings from './pages/Earnings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/earnings" element={<Earnings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
