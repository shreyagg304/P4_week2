import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/frontend/Navbar';
import Home from './components/frontend/Home';
import Marketplace from './components/frontend/Marketplace';
import Profile from './components/frontend/Profile';
import AboutUs from './components/frontend/AboutUs';
import Login from './components/frontend/Login';
import SignUp from './components/frontend/Signup';
import Cart from './components/frontend/Cart';
import Details from './components/frontend/Details';
import NewBook from './components/frontend/NewBook';
import Checkout from './components/frontend/Checkout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book/:id" element={<Details />} />
        <Route path="/newbook" element={<NewBook />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
