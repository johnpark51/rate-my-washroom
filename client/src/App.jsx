import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LocationPage from './pages/LocationPage/LocationPage';
import WashroomPage from './pages/WashroomPage/WashroomPage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/location/:locationId" element={<LocationPage />}></Route>
        <Route path="/washroom/:washroomId" element={<WashroomPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
