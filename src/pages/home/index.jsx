import React from 'react';
import { MainLayout } from '@/components/Layouts';
import {
  PlazaUNJ,
  RumahGadang,
  RumahGadangKanan,
  RumahGadangKiri,
} from '@/assets/images/ImagesHome';

export const HomePage = () => {
  return (
    <MainLayout title="Minang di Rantau">
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, #01663f, rgba(1,102,63,0.5), rgba(1,102,63,0.2)), url(${PlazaUNJ})`,
        }}
      >
        <div className="flex min-h-screen flex-col items-center justify-center bg-black bg-opacity-20 p-10 text-center text-white  ">
          <div className="-mt-[80px] flex flex-col items-center justify-center md:-mt-[50px]">
            <h1 className="text-base font-bold md:text-3xl">Selamat Datang di Website</h1>
            <div className="mt-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold md:text-5xl"> Keluarga Mahasiswa Minangkabau</h2>
              <h2 className="text-lg font-semibold md:text-5xl"> Universitas Negeri Jakarta</h2>
            </div>
            <p className="mt-4 rounded-lg text-sm md:text-base">
              Merangkul budaya, Merawat tradisi, Menyatukan generasi. Bersama dalam semangat Ranah
              Minang di kampus Universitas Negeri Jakarta. <br />
              Kami adalah rumah bagi mahasiswa Minangkabau di UNJ.
            </p>
          </div>
        </div>
      </div>
      <IntroduceSection />
      <ShapeSection />
      <VisiMisiSection />
    </MainLayout>
  );
};

const IntroduceSection = () => {
  const introduceCards = [
    { title: 'Basamo-samo', icon: '🫂' },
    { title: 'Saraso', icon: '🤝' },
    { title: 'Ingek Kampuang', icon: '🏘️' },
    { title: 'Buek Carito', icon: '📚' },
  ];
  return (
    <div className="relative overflow-hidden bg-[#01663f]">
      <div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-[350px] opacity-90 md:w-[400px]">
          <img src={RumahGadangKanan} alt="Rumah Gadang" className="h-auto w-full" />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 hidden w-[300px] opacity-90 md:block md:w-[400px]">
          <img src={RumahGadangKiri} alt="Rumah Gadang" className="h-auto w-full" />
        </div>
      </div>
      <div className="container relative z-20 mx-auto flex max-w-7xl flex-wrap justify-around gap-6 px-6 py-16 md:px-24 md:py-28">
        {introduceCards.map((card, index) => (
          <div
            key={index}
            className="group relative flex h-[120px] w-[120px] cursor-default flex-col items-center justify-center rounded-xl bg-white bg-opacity-60 p-4 text-center opacity-90 shadow-lg hover:shadow-2xl md:h-[200px] md:w-[200px]"
          >
            {/* Glowing border layer */}
            <div className="group-hover:animate-glowBorder absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-[#fbd600] via-red-500 to-[#fbd600] bg-[length:200%_200%] p-[2px] opacity-80 blur-sm"></div>

            {/* Content */}
            <div className="opacity-100">
              <span className="text-3xl md:text-7xl">{card.icon}</span>
              <h3 className="mt-2 text-sm font-semibold text-black md:mt-4 md:text-xl">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VisiMisiSection = () => {
  const visiMisi = {
    visi: 'Menjadikan KMM UNJ sebagai wadah mahasiswa untuk berkumpul, bertukar pikiran dan Menjadi pilar yang menggalang persatuan dan memperkuat jalinan kebersamaan di antara komunitas Minangkabau.',
    misi: [
      'Memperkenalkan ke khalayak luas tentang kmm unj',
      'Memfasilitasi Pertemuan dan Diskusi: Mengadakan acara-acara berkala yang memungkinkan anggota komunitas Minangkabau untuk bertemu, berbagi ide, dan mendiskusikan isu-isu yang relevan.',
      'Promosi Kesenian dan Budaya: Mengadakan acara seni, festival budaya, dan pameran untuk mempromosikan kesenian dan budaya Minangkabau.',
    ],
  };
  return (
    <div className="container mx-auto rounded-lg bg-white pb-28 pt-5 md:px-10">
      <h1 className="mb-16 text-center text-4xl font-bold text-[#01663f]">VISI MISI </h1>
      <div className="flex flex-col items-center justify-around gap-6 md:flex-row md:gap-0">
        <div className="px-10 md:w-1/3 md:px-10">
          <h2 className="mb-4 text-3xl font-bold ">Visi</h2>
          <p className="rounded-lg border-x-4 border-[#01663f] border-opacity-80 px-4 text-justify text-lg text-[#01663f]">
            {visiMisi.visi}
          </p>
        </div>
        <div className="px-10 md:w-2/3 md:px-10">
          <h2 className="mb-4 text-3xl font-bold">Misi</h2>
          <div className="text-justify">
            {visiMisi.misi.map((item, index) => (
              <div
                key={index}
                className="mb-2 rounded-lg border-l-4 border-[#01663f] border-opacity-80 pl-4 text-lg text-[#01663f]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ShapeSection = () => {
  return (
    <div className="relative z-0 -mt-0.5 h-16 md:mt-0">
      <svg
        className="absolute left-0 top-0 h-16 w-[50%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#01663f" points="0,0 100,0 0,100" />
      </svg>
      <svg
        className="absolute right-0 top-0 h-16 w-[50%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#01663f" points="100,0 0,0 100,100" />
      </svg>
    </div>
  );
};
