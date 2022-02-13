import { Component } from "react";
import logo from "../logo.png"

class About extends Component{
    render(){
        return(
            <div>
                <div class="bg-white py-5">
                    <div class="container py-5">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                <h2 class="font-weight-light">WHO WE ARE?</h2>
                                <p class="font-italic text-muted mb-4">
                                Don Cueva has been established with the fine vision of ... and who is currently the Chief executive Officer (CEO) 
                                of the Don Cueva. Professionally he is a chartered certified accountant (ACCA) but due to his keen interest in the 
                                fashion field he was inspired enough to initiate this venture. But to keep his initiation right on track ............
                                They both have worked hand on hand to execute the plan and bring Don Cueva to life.
                                </p><a href="#" class="btn btn-info px-5 rounded-pill shadow-sm">View Policies</a>
                            </div>
                            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={logo} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                        </div>
                        
                    </div>
                </div>

                <div class="bg-light py-5">
                    <div class="container py-5">
                        <div class="row mb-4">
                            <div class="col-lg-5">
                                <h2 class="display-4 font-weight-light">Our team</h2>
                                <p class="font-italic text-muted">about your team about your team about your teamabout your team</p>
                            </div>
                        </div>

                        <div class="row text-center">
                            {/* <!-- Team item--> */}
                            <div class="col-xl-3 col-sm-6 mb-5">
                                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={logo} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 class="mb-0">name name</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                            {/* <!-- Team item--> */}
                            <div class="col-xl-3 col-sm-6 mb-5">
                                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={logo} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 class="mb-0">name name</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                            {/* <!-- Team item--> */}
                            <div class="col-xl-3 col-sm-6 mb-5">
                                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={logo} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 class="mb-0">name name</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                            {/* <!-- Team item--> */}
                            <div class="col-xl-3 col-sm-6 mb-5">
                                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={logo} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 class="mb-0">name name</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            {/* <!-- End--> */}

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default About