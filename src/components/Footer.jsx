import { LogoKMM } from '@/assets/Content';
import { Link } from 'react-router-dom';
import { InstagramIcon, MailsIcon, Music2Icon } from 'lucide-react';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-10 w-full bg-[#01663f] text-white">
      <div className="flex flex-col items-center justify-center gap-5 py-6 md:flex-row md:gap-20">
        <div className="mt-5 flex flex-col items-center justify-center gap-4 text-justify md:flex-row">
          <div>
            <img className="h-[100px] w-[100px]" src={LogoKMM} alt="KMM Logos" />
          </div>
          <p className="max-w-[350px] text-sm">
            KMM (Keluarga Mahasiswa Minangkabau) UNJ adalah organisasi kemahasiswaan yang berfokus pada
            pengembangan budaya, sosial, dan akademik mahasiswa Minangkabau di Universitas Negeri
            Jakarta.
          </p>
        </div>
        <SosmedSection />
        <div className="flex items-center justify-center md:justify-start ">
          <div className="max-w-[350px] text-justify">
            <h2>Basecamp</h2>
            <hr className="mt-1 border-t-[1px] border-[#fbd600]" />
            <p className="mt-3 text-sm">
              Universitas Negeri Jakarta, Jl. Rawamangun Muka, Jakarta Timur, DKI Jakarta, Indonesia
            </p>
          </div>
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
  );
};

const SosmedSection = () => {
  return (
    <div className="justify-left flex flex-col items-center md:items-start md:justify-start">
      <div className="flex flex-col gap-1.5">
        {sosmedList.map((sosmed) => (
          <div key={sosmed.name} className="flex items-start justify-start gap-2">
            {sosmed.icon}
            <Link
              className="text-[#fbd600] hover:text-[white] hover:underline"
              to={sosmed.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sosmed.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const sosmedList = [
  {
    name: 'Instagram',
    title: '@kmm_unj',
    href: 'https://www.instagram.com/kmm_unj/',
    icon: <InstagramIcon className="mt-1 h-5 w-5" />,
  },
  {
    name: 'TikTok',
    title: '@kmm_unj',
    href: 'https://www.tiktok.com/@kmm_unj',
    icon: <Music2Icon className="mt-1 h-5 w-5" />,
  },
  {
    name: 'Email',
    title: 'kmminangunj@gmail.com',
    href: 'mailto:kmminangunj@gmail.com',
    icon: <MailsIcon className="mt-1 h-5 w-5" />,
  },
];
