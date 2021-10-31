import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Tour Packages Available</h2>
            <div className="service-container">
                {
                    services.map(service => <div className="row">
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;