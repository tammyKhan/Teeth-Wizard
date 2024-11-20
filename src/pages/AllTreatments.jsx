import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const AllTreatments = () => {
  const services = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl font-bold my-12">Our Services!</h2>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          services.map(service => 
            <ServiceCard
            key={service.id}
            service={service}
            ></ServiceCard>
          )
        }
       </div>
    </div>
  );
};

export default AllTreatments;