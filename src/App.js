import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter} from 'react-router-dom';
import Home from './Body/home';
import Body from './Body/Body';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div>Hello Worlfdvdfvd</div>
      <Navbar></Navbar>
      <Body></Body>
    </BrowserRouter>
  );
}

export default App;
