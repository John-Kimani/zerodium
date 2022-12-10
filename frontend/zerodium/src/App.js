import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/navbar/Navbar';
import HomePage from './pages/HomePage/Homepage';
import PageNotFound from './components/error/PageNotFound';
import ComingSoon from './components/comingsoon/ComingSoon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Toast container */}
        {/* Navigation */}
        <NavBar />
        <Routes>
          <Route exact path='/coming-soon' element={ <ComingSoon />}/>
            {/* Blogs */}
            <Route exact path='/' element={ <HomePage />}/>
            {/* Page not found */}
            <Route path='*' element={ <PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
