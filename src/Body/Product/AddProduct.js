import { Component } from "react";
import p1 from "../Images/p1.jpg"

class AddProduct extends Component{
    render(){
        return(
            <div className="justify-content-center row">
                <div className="hero-single">

                </div>
            <div className="col-10">
                <form>
                    <div className="justify-content-center row">
                            <div className="card shadow m-2 col-lg-11 col-md-11">
                                <div className="card-body">
                                    <h4 className="card-title text-center">Add Product</h4>
                                    <hr/>
                                    <h5 className="text-center">Product Photo</h5>
                                    <div className="row justify-content-center">
                                        <div class="border bg-light form-group col-lg-4 col-md-5 col-sm-6">
                                            <img className="img-fluid" src={p1}/>
                                            <input type="file"/>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 col-md-9">
                                            <div className="card p-5">
                                                <div class="form-group">
                                                    <label for="inputProductName">Product Name</label>
                                                    <input type="text" class="form-control" placeholder="Product Name"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputProductName">Price</label>
                                                    <input type="number" min="0" max="10000000" class="form-control" placeholder="Price in NRS only"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputProductName">Brand</label>
                                                    <input type="text" class="form-control" placeholder="BRAND"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputProductName">Description</label>
                                                    <input type="price" class="form-control" placeholder="Description" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputProductName">Available Stock</label>
                                                    <input type="number" min="0" max="10000" class="form-control" placeholder="Number of a product available"/>
                                                </div>
                                            </div>
                                            <button onClick={this.addProduct} className="btn float-end m-2 btn-primary">SAVE</button>
                                            {/* <button onClick={this.cancel} className="btn m-2 float-right btn-danger">CANCEL</button> */}
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
export default AddProduct