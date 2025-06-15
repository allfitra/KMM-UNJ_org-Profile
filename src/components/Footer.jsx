import { LogoKMM, LogoKMMcircle } from '@/assets/Content';
import { Link } from 'react-router-dom';
import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-10 w-full bg-[#01663f] text-white">
        <div className="justify-around py-6 md:flex">
          <div className="flex flex-col items-center justify-center gap-4 text-justify md:flex-row">
            <Link to="/">
              <img className="my-4 h-[100px] w-[100px]" src={LogoKMM} alt="KMM Logos" />
            </Link>
            <p className="max-w-[350px] text-sm">
              KMM (Keluarga Mahasiswa Minang) UNJ adalah organisasi kemahasiswaan yang berfokus pada
              pengembangan budaya, sosial, dan akademik mahasiswa Minangkabau di Universitas Negeri
              Jakarta.
            </p>
          </div>
          <div className="flex items-center justify-center p-2">
            <h1 className="flex text-sm font-semibold">
              Developed by{' '}
              <a
                href=""
                className="font-bold text-[#fbd600] hover:text-[#fbd600]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tim Pengembang KMM
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-[90%] border-t-[2px] border-[#fbd600]" />
        </div>
        <div className="flex items-center justify-center p-2">
          <h1 className="flex text-center text-sm font-semibold">
            &copy;2025 | Keluarga Mahasiswa Minang - Universitas Negeri Jakarta
          </h1>
        </div>
      </footer>
    </>
  );
};
