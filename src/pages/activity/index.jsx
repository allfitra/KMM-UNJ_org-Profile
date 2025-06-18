import React, { useEffect, useState } from 'react';

import { MainLayout } from '@/components/Layouts';
import { FotoBersama } from '@/assets/images/ImagesContact';
import { getActivities } from '@/database/fetch-api';

export const ActivityPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getActivities();
        console.log('Fetched activities:', getData);
        setActivities(getData);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout title="Minang di Rantau">
      <div className="container mx-auto px-2 pb-12 text-[#01663f]">
        <div>
          <h1 className="text-center text-4xl font-bold">Kegiatan Kami</h1>
        </div>
        <div className="container mx-auto mt-6 grid grid-cols-1 justify-between gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <Card
              key={index}
              img={activity.img}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

const Card = ({ title, description, img }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-[#01663f] shadow-sm">
      <a href="#">
        <img src={img} alt="Foto Kegiatan" className="h-48 w-full rounded-t-lg object-cover" />
      </a>
      <div className="px-5 py-3">
        <p className="text-sm font-normal text-white">{new Date().toLocaleDateString()}</p>
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#fbd600]">{title}</h5>
        </a>
        <p className="text-justify text-base font-normal text-white">{description}</p>
      </div>
    </div>
  );
};
