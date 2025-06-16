import { MainLayout } from '@/components/Layouts';
import React from 'react';

export const ActivityAdminPage = () => {
  return (
    <MainLayout title="Admin">
      <div className="container mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Admin Activity Page</h1>
        <p>This is the admin page for managing activities.</p>
        {/* Add your admin activity management components here */}
      </div>
    </MainLayout>
  );
};
