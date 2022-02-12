import { Component } from "react";
import p1 from "../Images/p1.jpg"

class Profile extends Component{
    render(){
        return(
            <div>
                <div className="hero-single">

                </div>
                <div className="container mb-2 shadow">
                    <h3 className="mt-2 p-3 text-center">Product in Your Cart</h3>
                    <hr/>
                    <div className="row justify-content-center">
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
                                    <p className="text-end"><em>Total:</em> <strong>Rs. 1234/-</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-lg-2 col-md-12">
                            <button  className="btn float-end m-1 btn-danger">REMOVE</button>
                            <button  className="btn float-end m-1 btn-dark">EDIT</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
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
                                    <p className="text-end"><em>Total:</em> <strong>Rs. 1234/-</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-lg-2 col-md-12">
                            <button  className="btn float-end m-1 btn-danger">REMOVE</button>
                            <button  className="btn float-end m-1 btn-dark">EDIT</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
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
                                    <p className="text-end"><em>Total:</em> <strong>Rs. 1234/-</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-lg-2 col-md-12">
                            <button  className="btn float-end m-1 btn-danger">REMOVE</button>
                            <button  className="btn float-end m-1 btn-dark">EDIT</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-center">
                        <div className="p-3 col-lg-2 col-md-5">
                            <h5 className="text-center mt-3">TOTAL:</h5>
                        </div>
                        <div className="col-lg-8 pb-0 col-md-7">
                            
                            {/* <h6 class="card-subtitle text-center text-muted">Putalisadak, Kathmandu</h6> */}
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-8 col-sm-10">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <p className="text-center"><em>Quantity: <strong>12</strong></em></p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <p className="text-center"><em>PRICE: <strong>Rs. 123/-</strong></em></p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="p-3 col-lg-2 col-md-12">
                            <button  className="btn float-end m-1 btn-info">MAKE PAYMENT  </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile