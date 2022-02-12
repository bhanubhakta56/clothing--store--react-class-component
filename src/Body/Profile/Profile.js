import { Component } from "react";
import p1 from "../Images/p1.jpg"

class Profile extends Component{
    render(){
        return(
            <div>
                <div className="hero-single">
                    
                </div>
                <div className="m-1 col-12">
                            <div className="row border border-info justify-content-center">
                                <div className="p-3 col-lg-2 col-md-5">
                                    <img src={p1} class="img-fluid" alt="Card image cap"/>
                                </div>
                                <div className="col-lg-8 pb-0 col-md-7">
                                    <h5 className="text-center mt-3">productName</h5>
                                    <hr></hr>
                                    {/* <h6 class="card-subtitle text-center text-muted">Putalisadak, Kathmandu</h6> */}
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 col-md-8 col-sm-10">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <p className="text-center"><em>Quantity: <strong>12</strong></em></p>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <p className="text-center"><em>Price: <strong>Rs. 123/-</strong></em></p>
                                                </div>
                                            </div>
                                            <p className="text-right"><em>Total:</em> <strong>Rs. 1234/-</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 col-lg-2 col-md-12">
                                    <button  className="btn float-right m-1 btn-primary">BUY NOW</button>
                                    <button  className="btn float-right m-1 btn-danger">REMOVE</button>
                                    <a className=" float-right m-3 text-primary">EDIT</a>
                                </div>
                            </div>
                        </div>
        </div>
        )
    }
}

export default Profile