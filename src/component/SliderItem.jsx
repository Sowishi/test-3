import React from 'react';

const SliderItem = (props) => {
    return ( 
        <div className="carousel-card d-flex justify-content-center align-items-center flex-column">
            <div className="background" style={{backgroundImage: `url(${props.itemPic})` }}></div>
            <div className="content p-3 px-5">
                <div className="img-wrapper p-3 shadow-lg row">
                    <div className="col-12 mb-4">
                        <div className="title align-self-start text-center w-100">
                            <h3 className="mb-2">{props.title}</h3>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={props.itemPic} alt="product img" className="img-fluid" />
                    </div>
                    <div className="col-md-6 price d-flex justify-content-center align-items-center flex-column mt-md-0 mt-2">
                        <h4>&#8369;{props.price}</h4>
                        <button className="btn btn-danger btn-lg mt-2 px-5">Buy Now!</button>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default SliderItem;