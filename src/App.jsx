import './assets/style.css'
import {Route, Routes} from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
