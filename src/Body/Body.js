import { Component } from "react/cjs/react.production.min";
import { Route , Routes} from "react-router-dom";
import Home from "./home";
import Single from "./Single";
import Profile from "./Profile/Profile";
import Login from "./Login";
import AddProduct from "./Product/AddProduct";

class Body extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/single" exact element={<Single/>}/>
                    <Route path="/profile" exact element={<Profile/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/addProduct" exact element={<AddProduct/>}/>
                </Routes>
            </div>
        )
    }
}
export default Body