import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useFirebase from '../../hooks/useFirebase';
import './myOrder.css'

const MyOrder = () => {
    const { user } = useFirebase();
    const [myOrder, setMyOrder] = useState([])


    useEffect(() => {
        fetch(`https://spooky-ghost-52974.herokuapp.com/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrder(data);
                // setLoading(true);
            });
    }, [user.email]);
    console.log(myOrder);

    //Delete order
    // const handleDeleteOrder = id => {
    //     const proceed = window.confirm('Are you sure you want to delete?');
    //     if (proceed) {
    //         const url = `http://localhost:5000/myOrder/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successfully');
    //                     const remainingOrders = myOrder.filter(order => order._id !== id)
    //                     setMyOrder(remainingOrders)
    //                 }
    //             })
    //     }
    // }

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {

            const url = `https://spooky-ghost-52974.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = myOrder.filter(order => order._id !== id);
                        setMyOrder(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>


            {
                myOrder.map((order, index) => <div className="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">Tour Package</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.city}</td>
                                <td>{order.order.name}</td>
                                <td>{order.order.price}</td>
                                <td><button onClick={() => handleDeleteOrder(myOrder._id)} className="btn btn-dark ">X</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default MyOrder;