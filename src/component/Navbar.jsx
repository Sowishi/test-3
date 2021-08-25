import React from 'react';


const Navbar = () => {
    return (  
        <div className="container-fluid navbar p-3">
            <div className="row w-100 mx-3">
                <div className="col-lg-3 col-6 d-flex justify-content-start align-items-center">
                    <div className="logo">
                        <img src="./logos/logo.png" alt="" className="img-fluid" width="200px"/> 
                    </div>
                </div>
                <div className="col-lg-5 col-6">
                    <form action="">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><img id="searchButton" src="./icons/search.svg" alt="" /></div>
                            </div>
                            <input type="text" className="form-control" placeholder="Search for products, categories, stores, or crypto."/>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4 mt-3 mt-lg-0">
                    <div className="navigation d-flex justify-content-center align-items-center text-nowrap">
                        <a href="#" className="nav-link text-white">How it works?</a>
                        <a href="#" className="nav-link text-white">Contact</a>
                        <a href="#" className="nav-link text-white d-flex justify-content-center align-items-center">
                        <img className="mr-3" src="./icons/user .svg" alt="" />
                        <p className="mb-0">
                            Login
                        </p>
                       
                    </a>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}
 
export default Navbar;