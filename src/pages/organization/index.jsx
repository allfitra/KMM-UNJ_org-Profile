import React from 'react';

import { MainLayout } from '@/components/Layouts';

export const OrganizationPage = () => {
  return (
    <MainLayout title="Minang di Rantau">
      <div className="container mx-auto px-2">
        <h1 className="mb-6 text-center text-4xl font-bold">Welcome to the Organization Page</h1>
        <p className="text-center text-lg">
          This is the organization page of our application. Here you can find information about the
          Minang community and its organizational structure.
        </p>
      </div>
    </MainLayout>
  );
};
