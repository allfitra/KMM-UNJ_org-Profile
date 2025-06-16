import React from 'react';

import { MainLayout } from '@/components/Layouts';
import { FotoBersama } from '@/assets/images/ImagesContact';

export const ContactPage = () => {
  return (
    <MainLayout title="Minang di Rantau">
      <div className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="text-4xl font-extrabold text-[#01663f]">Hubungi Kami</h2>
            <p className="mt-2 text-lg text-gray-600">
              Butuh informasi apapun tentang komunitas kami?
              <br />
              Jangan ragu untuk menghubungi kami melalui informasi kontak di bawah ini.
            </p>
          </div>

          {/* Foto Kebersamaan */}
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            {/* Gambar */}
            <div className="overflow-hidden rounded-2xl shadow-lg md:h-[300px]">
              <img
                src={FotoBersama}
                alt="Deskripsi Gambar"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Informasi Kontak */}
            <div className="mx-auto flex max-w-[550px] flex-col justify-center rounded-2xl bg-[#01663f] px-8 py-7 text-white shadow-lg md:mx-0 md:h-[300px]">
              <h3 className="mb-4 text-2xl font-semibold">Informasi Kontak</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Alamat:</strong>
                  <br />
                  Jl. Rawamangun Muka, Universitas Negeri Jakarta, Jakarta Timur
                </li>
                <li>
                  <strong>Email:</strong>
                  <br />
                  kmminangunj@gmail.com
                </li>
                <li>
                  <strong>Telepon/WA:</strong>
                  <br />
                  +62
                </li>
                <li>
                  <strong>Instagram:</strong>
                  <br />
                  @kmm_unj
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
