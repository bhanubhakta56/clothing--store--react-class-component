import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter} from 'react-router-dom';
import Home from './Body/home';
import Body from './Body/Body';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCheckSquare, faCoffee, faCreditCard, faPencilAlt, faSearch, faSignOutAlt, faStar, faTrash, faUniversity, faUser} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faSearch, faStar, faUser, faSignOutAlt, faPencilAlt, faTrash, faBell, faCreditCard, faUniversity, faPaypal)



function App() {
  return (
    <BrowserRouter>
      <div>Hello Worlfdvdfvd</div>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
