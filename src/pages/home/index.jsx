import React from 'react';
import { MainLayout } from '@/components/Layouts';
import { PlazaUNJ } from '@/assets/images/ImagesHome'; // pastikan ini adalah URL atau `require`/`import`

export const HomePage = () => {
  return (
    <MainLayout title="Minang di Rantau">
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, #01663f, rgba(1,102,63,0.5), rgba(1,102,63,0.2)), url(${PlazaUNJ})`,
        }}
      >
        <div className="flex min-h-screen flex-col items-center justify-center bg-opacity-60 p-10 text-center text-white ">
          <div className="-mt-[80px] flex flex-col items-center justify-center md:-mt-[50px]">
            <h1 className="text-base font-bold md:text-3xl">Selamat Datang di Website</h1>
            <div className="mt-4 flex flex-col items-center">
              <h2 className="text-xl font-semibold md:text-5xl"> Komunitas Mahasiswa Minang</h2>
              <h2 className="text-xl font-semibold md:text-5xl"> Universitas Negeri Jakarta</h2>
            </div>
            <p className="mt-4 text-lg">
              Kami adalah rumah bagi mahasiswa Minangkabau di UNJ. Bersama kita merantau, bersama
              pula kita melangkah maju.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#01663f] py-24 text-white">
        <h1 className="mb-6 text-center text-4xl font-bold">On Progress</h1>
      </div>
      <div className="py-24">
        <h1 className="mb-6 text-center text-4xl font-bold">On Progress</h1>
      </div>
      =
    </MainLayout>
  );
};
