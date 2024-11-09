import './assets/style.css'
import {Route, Routes} from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import LoginPage from './views/loginPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './views/contact';
import SignUpPage from './views/signUpPage';
import MovieDetails from './views/movieDetails';
import BookTickets from './views/bookTickets';
import SeatSelection from './views/seatSelection';

function App() {
  return(
    <div>
      <Navbar/>
      < div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/loginPage' element={<LoginPage/>}/>
        <Route path='/signUpPage' element={<SignUpPage/>}/>
        <Route path='/movieDetails' element={<MovieDetails/>}/>
        <Route path='/bookTickets' element={<BookTickets/>}/>
        <Route path='/seatSelection' element={<SeatSelection/>}/>
      </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
