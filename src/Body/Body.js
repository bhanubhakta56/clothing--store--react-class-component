import { Component } from "react/cjs/react.production.min";
import { Route , Routes} from "react-router-dom";
import Home from "./home";
import Single from "./Single";
import Profile from "./Profile/Profile";
import Login from "./Login";
import AddProduct from "./Product/AddProduct";
import UpdateProduct from "./Product/UpdateProduct";
import ViewProduct from "./Product/ViewProduct";
import About from "./About";
import Collection from "./Collection/Collection";
import Cart from "./Cart/Cart";
import Payment from "./Payment/Payment";

class Body extends Component{
    render(){
        return(
            <div className="bg-light">
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/single" exact element={<Single/>}/>
                    <Route path="/profile" exact element={<Profile/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/addProduct" exact element={<AddProduct/>}/>
                    <Route path="/updateProduct" exact element={<UpdateProduct/>}/>
                    <Route path="/viewProduct" exact element={<ViewProduct/>}/>
                    <Route path="/aboutUs" exact element={<About/>}/>
                    <Route path="/collection" exact element={<Collection/>}/>
                    <Route path="/myCart" exact element={<Cart/>}/>
                    <Route path="/makePayment" exact element={<Payment/>}/>
                </Routes>
            </div>
        )
    }
}
export default Body