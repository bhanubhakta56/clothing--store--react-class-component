import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <footer class="text-center text-lg-start" style={{backgroundColor: "#cdf7f2"}}>
                <div class="text-center p-3">
                 &#169; 
                    <a class="text-dark" href="/"> DON CUEVA</a> {new Date().getFullYear()}
                </div>
            </footer>
        )
    }
}
export default Footer