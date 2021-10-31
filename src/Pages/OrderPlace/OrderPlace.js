import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './orderPlace.css'
const OrderPlace = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useFirebase();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const onSubmit = data => {
        const myOrder = service;
        data.order = myOrder;
        data.email = user.email;
        console.log('my order', myOrder)
        fetch('http://localhost:5000/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('You have booked the tour package successfully');

                    reset();
                    console.log(result);
                }

            })
    }

    return (
        <div className="container">

            <h2>{service.name}</h2>
            <img src={service.img} alt="" />
            {/* <h2>this is booking: {serviceId}</h2> */}
            <p>Details:{service.description}</p>
            <h6>Cost: {service.price}BDT per person</h6>
            <div>
                <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>

    );
};

export default OrderPlace;