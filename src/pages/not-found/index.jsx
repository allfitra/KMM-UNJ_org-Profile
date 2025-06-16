import { MainLayout } from '@/components/Layouts';
import React from 'react';

export const NotFoundPage = () => {
  return (
    <MainLayout title="Page Not Found">
      <section className="mt-48 text-[#01663f] md:mt-10 ">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">404</h1>
          <p className="mb-1 text-3xl font-bold tracking-tight md:text-4xl">Something's missing.</p>
          <p className="text-lg font-light text-[#300304]">Maaf, Tidak ada apapun disini</p>
          <a
            href="/"
            className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium  focus:outline-none focus:ring-4"
          >
            Kembali ke Halaman Utama
            <svg
              className="-mr-1 ml-2 mt-0.5 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12M7 1l4 4-4 4M3 5h8"
              />
            </svg>
          </a>
        </div>
      </section>
    </MainLayout>
  );
};
