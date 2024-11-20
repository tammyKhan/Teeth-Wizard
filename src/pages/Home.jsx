import React from 'react';
import Banner from '../components/Banner';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Feedback from '../components/Feedback';

const Home = () => {
  const services = useLoaderData();
  const {servicesData, feedbackData} = services

  return (
    <div>
       <Banner></Banner>
       <h2 className="text-3xl font-bold my-12">Our Services!</h2>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          servicesData.slice(0,4).map(service => 
            <ServiceCard
            key={service.id}
            service={service}
            ></ServiceCard>
          )
        }
       </div>
       <button className='mx-auto btn btn-neutral block my-12'>
       <NavLink to="/allTreatments" >Show more...</NavLink>
       </button>

      <Feedback
      
      feedbackData={feedbackData}
      ></Feedback>

    </div>
  );
};

export default Home;