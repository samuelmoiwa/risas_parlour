import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TopNavBar from './components/TopNavBar';
import Home from './pages/Home.jsx'


function App() {
  return (
    <>
        <TopNavBar />
        <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

        {/* <Footer /> */}
    </>
  );
}

export default App;
