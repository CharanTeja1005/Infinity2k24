import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarsCanvas from './components/StarsCanvas';
// import TracingBeamComponent from './components/TracingBeamComponent';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <StarsCanvas/>
      {/* <TracingBeamComponent/> */}
      <Footer />
    </>
  );
}

export default App;