import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className="container">
            <div className="col rounded-3 gy-3">
                <div className="card h-100 mb-3 card card-style">
                    <img className="img-fluid card-img-top  " src={img} alt="" />
                    <div className="card-body">
                        <h4 className="text-success">{name}</h4>
                        <h5>Price: {price}</h5>
                        {/* <p className="px-3">{description}</p> */}
                    </div>
                    <div className="justify-content-center pb-4">
                        <Link to={`/orderPlace/${_id}`}>
                            <button className="btn btn-primary">See details for booking</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;

{/* <div className="container  ">
            <div className="col rounded-3 gy-3">
                <div className="card h-100 mb-3 card card-style">
                    <img src={img} className="card-img-top img-fluid homeServiceImg" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title text-danger"> {name} </h4>
                        <p className="card-text ">
                            Specialized in : {overview}
                        </p>

                    </div>
                    <div className="justify-content-center pb-4">
                        <Link to={`/details/${id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>

        </div> */}