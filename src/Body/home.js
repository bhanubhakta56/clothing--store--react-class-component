import { Component } from "react/cjs/react.production.min";
import p1 from "../Body/Images/p1.jpg";
import p2 from "../Body/Images/p2.jpg"

class Home extends Component{
    render(){
        return(
            <div className="mt-5">
                <div class="bg-white py-5">
                    <div class="container py-5">
                        <div class="row align-items-center">
                        <div class="col-lg-5 px-5 mx-auto"><img src={p2} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                        <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light">TITLE TITLE</h2>
                            <p class="font-italic text-muted mb-4">
                                subtitle subtitle subtitle subtitle subtitle subtitle 
                                subtitle subtitle subtitle subtitle subtitle subtitle 
                                subtitle subtitle subtitle subtitle subtitle subtitle 
                            </p><a href="#" class="btn btn-primary px-5 rounded-pill shadow-sm">COLLECTION</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="hero-image-home">
                    <div class="hero-text">
                        <h1>AMPLIFY YOUR PERSONA</h1>
                        <p>PASTE YOUR SLOGON HERE</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home