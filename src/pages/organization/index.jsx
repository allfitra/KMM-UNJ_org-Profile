import React from 'react';

import { MainLayout } from '@/components/Layouts';

export const OrganizationPage = () => {
  return (
    <MainLayout title="Kapalo Arak">
      <div className="container mx-auto px-2 pb-12">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-[#01663f]">Struktur Organisasi</h2>
        </div>
        <div className="item-center flex justify-center">
          <OnGoing />
        </div>
      </div>
    </MainLayout>
  );
};

const OnGoing = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <svg
          className="h-16 w-16 animate-spin text-emerald-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2a10 10 0 00-3.516.648l1.243 3.32A6 6 0 0118 12h4a10 10 0 00-10-10z"
          />
        </svg>
        <h1 className="mt-10 text-2xl font-bold text-[#01663f]">Sedang dalam pengembangan</h1>
        <p className="mt-2 text-lg text-[#01663f]">
          Mohon maaf, halaman ini masih dalam pengembangan.
        </p>
        <p className="text-lg text-[#01663f]">Silakan kunjungi kembali nanti.</p>
      </div>
    </div>
  );
};

const CardProfile = () => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-[#01663f] shadow-sm">
      <a href="#">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto Profil"
          className="h-48 w-full rounded-t-lg object-cover object-center"
        />
      </a>
      <div className="px-5 py-3">
        <h3 className="text-lg font-semibold text-white">Nama Anggota</h3>
        <p className="text-sm font-normal text-white">Jabatan</p>
      </div>
    </div>
  );
};
