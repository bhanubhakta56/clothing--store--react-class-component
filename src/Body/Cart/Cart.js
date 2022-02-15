import { faBell, faGift, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import p1 from "../Images/p1.jpg";

class Cart extends Component{
    render(){
        return(
            <div>
                <div className="hero-single">

                </div>
                <div class="p-4 px-lg-0">
                    <div class="pb-5">
                        <div class="container">
                         {/*Cart table  */}
                        <div class="row">
                            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                
                                <h3 className="mt-2 p-3 text-center">Product in Your Cart</h3>
                                {/* <!-- Shopping cart table --> */}
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Quantity</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Remove</div>
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" class="border-0">
                                                    <div class="p-2">
                                                        <img src={p1} alt="" style={{width:"70px"}} class="img-fluid rounded shadow-sm"/>
                                                        <div class="ms-3 d-inline-block align-middle">
                                                            <h5 className="mb-0"><a href="#" className="text-dark text-decoration-none d-inline-block align-middle">Special Jacket</a></h5><span className="text-muted fw-normal fst-italic d-block">Category: Winter</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td class="border-0 align-middle"><strong>$79.00</strong></td>
                                                <td class="border-0 align-middle"><strong>3</strong></td>
                                                <td class="border-0 align-middle"><a href="#" class="text-dark"><FontAwesomeIcon icon={faTrash}/></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="border-0">
                                                    <div class="p-2">
                                                        <img src={p1} alt="" style={{width:"70px"}} class="img-fluid rounded shadow-sm"/>
                                                        <div class="ms-3 d-inline-block align-middle">
                                                            <h5 className="mb-0"><a href="#" className="text-dark text-decoration-none d-inline-block align-middle">Special Jacket</a></h5><span className="text-muted fw-normal fst-italic d-block">Category: Winter</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td class="border-0 align-middle"><strong>$79.00</strong></td>
                                                <td class="border-0 align-middle"><strong>3</strong></td>
                                                <td class="border-0 align-middle"><a href="#" class="text-dark"><FontAwesomeIcon icon="fa-trash"/></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="border-0">
                                                    <div class="p-2">
                                                        <img src={p1} alt="" style={{width:"70px"}} class="img-fluid rounded shadow-sm"/>
                                                        <div class="ms-3 d-inline-block align-middle">
                                                            <h5 className="mb-0"><a href="#" className="text-dark text-decoration-none d-inline-block align-middle">Special Jacket</a></h5><span className="text-muted fw-normal fst-italic d-block">Category: Winter</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td class="border-0 align-middle"><strong>$79.00</strong></td>
                                                <td class="border-0 align-middle"><strong>3</strong></td>
                                                <td class="border-0 align-middle"><a href="#" class="text-dark"><FontAwesomeIcon icon="fa-trash"/></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- End --> */}
                            </div>
                        </div>

                        <div class="row py-5 p-4 bg-white rounded shadow-sm">
                            <div class="col-lg-6">
                                <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Coupon code</div>
                                <div class="p-4">
                                    <p class="fst-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                    <div class="input-group mb-4 border rounded-pill p-2">
                                        <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0"/>
                                        <div class="input-group-append border-0">
                                            <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"> <FontAwesomeIcon className="me-2" icon={faGift}/>Apply coupon</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                            <div class="p-4">
                                <p class="fst-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                <ul class="list-unstyled mb-4">
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                    <h5 class="font-weight-bold">$400.00</h5>
                                </li>
                                </ul><a href="/makePayment" class="btn btn-dark rounded-pill py-2 float-end btn-block">Procceed to checkout</a>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart