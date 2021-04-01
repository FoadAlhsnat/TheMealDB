import {BrowserRouter as Router,Route} from 'react-router-dom'


import Categories from "./Components/Categories/Categories.Component";
import Footer from "./Components/Footer/Footer.component";
import GetMeal from './Components/GetMeal/GetMeal.Component';
import MainPage from "./Components/MainPage/MainPage.component";
import Nav from "./Components/NavBar/Nav.Component";

import './style.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Route path='/'exact component={MainPage}/>
      <Route path='/categories' exact component={Categories}/>
      <Route path='/meal/:id' exact component={GetMeal}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
