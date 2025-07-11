import React, { useEffect, useState } from 'react';

import { MainLayout } from '@/components/Layouts';
import { getActivities } from '@/database/fetch-api';
import formatDate from '@/utils/formatdate';
import { LoadingCard } from '@/components/other/Loadingcard';
import { LogoKMM } from '@/assets/Content';

export const ActivityPage = () => {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getActivities();
        const dataSorted = getData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setActivities(dataSorted);
        setLoading(false);
        console.log('Fetched activities:', getData);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout title="Basamo-samo">
      <div className="container mx-auto px-2 pb-12 text-[#01663f]">
        <div>
          <h1 className="text-center text-4xl font-bold">Kegiatan Kami</h1>
        </div>
        <div className="container mx-auto mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:pl-12">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => <LoadingCard key={index} />)
          ) : activities.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold text-gray-500">
                Belum ada kegiatan yang ditampilkan.
              </p>
            </div>
          ) : (
            activities.map((activity, index) => <Card key={index} data={activity} />)
          )}
        </div>
      </div>
    </MainLayout>
  );
};

const Card = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    setTimeout(() => setOpenModal(true), 10);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setShowModal(false), 300);
  };

  if (!data || !data.title || !data.date) return null;

  return (
    <>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-[#01663f] shadow-sm">
        <div className="cursor-zoom-in" onClick={handleOpenModal}>
          <img
            src={data.imageUrl || LogoKMM}
            alt="Foto Kegiatan"
            className="h-48 w-full rounded-t-lg object-cover object-center"
          />
        </div>
        <div className="px-5 py-3">
          <p className="text-sm font-normal text-white">{formatDate(data.date)}</p>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-[#fbd600]">{data.title}</h5>
          <p className="text-justify text-base font-normal text-white">{data.description}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-3xl transform rounded-lg bg-white p-4 shadow-lg transition-all duration-300 ease-out ${
              openModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            {/* Tombol Close */}
            <button
              onClick={handleCloseModal}
              className="absolute right-3 top-3 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              ×
            </button>
            <img
              src={data.imageUrl || LogoKMM}
              alt="Foto Kegiatan"
              className="max-h-[80vh] w-full rounded-md object-cover object-center"
            />
          </div>
        </div>
      )}
    </>
  );
};
