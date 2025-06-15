import React from 'react';

import { MainLayout } from '@/components/Layouts';

export const ActivityPage = () => {
  return (
    <MainLayout title="Minang di Rantau">
      <div className="container mx-auto px-2">
        <h1 className="mb-6 text-center text-4xl font-bold">Welcome to the Activity Page</h1>
        <p className="text-center text-lg">
          This is the activity page of our application. Here you can find various activities and
          events related to the Minang community.
        </p>
      </div>
    </MainLayout>
  );
};
