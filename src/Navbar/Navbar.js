import logo from '../logo.png';
import { Component } from "react/cjs/react.production.min";

class Navbar extends Component{
    render(){
        return(
            <nav class="ps-5 pe-5 navbar fixed-top navbar-light" style={{backgroundColor: "#cdf7f2"}}>
                <div class="container">
                    {/* <a class="navbar-brand" href="#"></a> */}
                    <a href='/'>
                        <img src={logo} alt="logo" width="100" height="90" class="d-inline-block align-text-top"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/aboutUs">About</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Collection
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/collection">Summer</a></li>
                            <li><a class="dropdown-item" href="/collection">Winter</a></li>
                            <li><a class="dropdown-item" href="/collection">Spring</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
//export body.
export default Navbar