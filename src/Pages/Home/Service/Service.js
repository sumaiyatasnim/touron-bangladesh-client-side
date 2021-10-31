import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className="container col">
            <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/orderPlace/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;

{/* <div id="experts" className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <img src={img} alt="" />
            <h3> Name: {name} </h3>
            <h5 className="text-success"> Expertize: {expertize}</h5>

        </div> */}