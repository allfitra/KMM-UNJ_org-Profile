import React from 'react';

import { MainLayout } from '@/components/Layouts';

export const ContactPage = () => {
  return (
    <MainLayout title="Minang di Rantau">
      <div className="container mx-auto px-2">
        <h1 className="mb-6 text-center text-4xl font-bold">Contact Us</h1>
        <p className="text-center text-lg">
          If you have any questions or need more information, feel free to reach out to us.
        </p>
      </div>
    </MainLayout>
  );
};
