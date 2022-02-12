import { Component } from "react/cjs/react.production.min";
import { Route , Routes} from "react-router-dom";
import Home from "./home";
import Single from "./Single";

class Body extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/single" exact element={<Single/>}/>
                </Routes>
            </div>
        )
    }
}
export default Body