import { Component } from "react"
import p1 from "../Body/Images/p1.jpg"

class Single extends Component{
    render(){
        return(
            <div className="container-fluid p-3">
                <div className="hero-single">

                </div>
                <div style={{backgroundColor: "#fff"}} className="row shadow justify-content-center" >
                    <div className="mb-5 mt-5 col-12">
                        <div className="row  justify-content-center">
                            <div className="col-lg-4 shadow col-md-4 p-4 ">
                                <img className="mx-auto d-block img-fluid" src={p1} alt="userphoto"/>
                            </div>
                            <div className="col-lg-5 border  col-md-7 p-3">
                                <h2 className="text-center">productName</h2>
                                <hr></hr>
                                <h6 className="text-muted">Supplier: <a className="text-primary">companyNAme</a></h6>
                                <h6>Brand: productBrand</h6>
                                <h5 className="text-info">Price: Rs.237645/-</h5>

                                <p>Quantity: <button className="btn btn-secondary">-</button>  12   <button className="btn btn-dark" >+</button></p> 
                                <h5 className="text-right mr-4">Total: Rs.2344/-</h5>
                                <div className="row">
                                    <div className="col-lg-6 p-2 col-md-6 col-sm-6 col-xs-6">
                                        <button className="btn btn-block btn-outline-warning">Buy Now</button>
                                    </div>
                                    <div className="col-lg-6 p-2 col-md-6 col-sm-6 col-xs-6">
                                        <button className="btn btn-block float-right btn-outline-primary">Add to Cart</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-5 col-12">
                        <h3 className="text-center">SPECIFICATIONS</h3>
                        <hr/>
                        <div className="ms-3 me-3 container-fluid">
                            <strong>productName:</strong> NAME<br/>
                            color: red<br/>
                            size:XL<br/>
                        Descsripton Descsripton Descsripton Descsripton  Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton
                        Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton
                        Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton
                        Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton Descsripton
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Single