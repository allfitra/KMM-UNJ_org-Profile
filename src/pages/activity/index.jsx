import React from 'react';

import { MainLayout } from '@/components/Layouts';

export const ActivityPage = () => {
  return (
    <MainLayout title="Minang di Rantau">
      <div className="container mx-auto px-2">
        <h1 className="mb-6 text-center text-4xl font-bold">Activity Page</h1>
        <h1 className="mb-6 text-center text-4xl font-bold">Masih dalam Pembangunan</h1>
        <p className="text-center text-lg">
          silahkan kembali lagi nanti untuk melihat perkembangan terbaru dari halaman ini.
        </p>
      </div>
    </MainLayout>
  );
};
