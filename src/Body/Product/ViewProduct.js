import { Component } from "react";
import p1 from "../Images/p1.jpg"

class ViewProduct extends Component{
    render(){
        return(
            <div>
            <div className="hero-single"></div>
                <div className="col-lg-3 col-md-4 col-sm-6 m-1">
                                            <div className="card shadow">
                                                <div className="col-12 p-4" >
                                                    <img class="card-img-top border mx-auto d-block img-fluid" style={{height:"12rem"}} src={p1} alt="Card image cap"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 class="card-title">
                                                        productName
                                                    </h5>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h6 className="card-subtitle text-muted">productBrand</h6>
                                                        </div>
                                                        <div className="col-6">
                                                            <h6 className="card-subtitle float-right text-muted">Rs.123/-</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <button className="btn float-left ml-2 mb-2 btn-danger">REMOVE</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <a><p className="btn float-right mr-2 mb-2 btn-primary"><u>UPDATE</u></p></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            </div>
        )
    }
}
export default ViewProduct