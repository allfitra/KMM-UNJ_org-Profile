import { LogoKMM } from '@/assets/Content';
import { MainLayout } from '@/components/Layouts';
import { deleteActivity, getActivities, postActivity, uploadImage } from '@/database/fetch-api';
import formatDate from '@/utils/formatdate';
import React, { useEffect, useState } from 'react';

export const ActivityAdminPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState([]);
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  // Fetch data saat pertama kali load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getActivities();
        const sorted = getData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setActivities(sorted);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const image = formData.get('image');
    if (image.size > MAX_FILE_SIZE) {
      alert('Ukuran gambar maksimal 10MB!');
      return;
    }

    try {
      setIsLoading(true);
      const imageUrl = await uploadImage(image);
      if (!imageUrl) {
        alert('Gagal mengupload foto kegiatan. Silakan coba lagi.');
        return;
      }

      const activityData = {
        title: formData.get('title'),
        description: formData.get('description'),
        date: formData.get('date'),
        imageUrl,
        createdDate: new Date().toISOString(),
      };

      const docId = await postActivity(activityData);
      setIsLoading(false);
      const newActivity = { id: docId, ...activityData };

      setActivities((prev) => [newActivity, ...prev]);
      form.reset();
      alert('Kegiatan berhasil disimpan!');
    } catch (error) {
      alert('Gagal menyimpan kegiatan. Silakan coba lagi.');
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus kegiatan ini?')) {
      try {
        await deleteActivity(id);
        setActivities((prev) => prev.filter((a) => a.id !== id));
        alert('Kegiatan berhasil dihapus!');
      } catch (err) {
        alert('Gagal menghapus kegiatan.');
      }
    }
  };

  return (
    <MainLayout title="Admin">
      <div className="container mx-auto flex flex-col items-center justify-center pb-8 ">
        <form
          onSubmit={handleSubmitForm}
          className="w-full max-w-md space-y-4 rounded bg-white p-6 shadow-md "
        >
          <h2 className="text-center text-xl font-semibold">Tambah Kegiatan</h2>

          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-medium">
              Judul Kegiatan
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full rounded border px-3 py-2"
              placeholder="Masukkan judul kegiatan"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-1 block text-sm font-medium">
              Deskripsi
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full rounded border px-3 py-2"
              placeholder="Masukkan deskripsi kegiatan"
              rows={4}
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="mb-1 block text-sm font-medium">
              Tanggal Kegiatan
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="mb-1 block text-sm font-medium">
              Foto Kegiatan
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 text-white transition duration-200 hover:bg-blue-700"
          >
            Simpan Kegiatan
          </button>
          {isLoading && <Loading />}
        </form>

        <ActivityList activities={activities} onDelete={handleDelete} />
      </div>
    </MainLayout>
  );
};

const ActivityList = ({ activities, onDelete }) => {
  return (
    <div className="container mx-auto mt-6 w-full">
      <h2 className="mb-4 text-xl font-semibold">Daftar Kegiatan</h2>

      {activities.length === 0 ? (
        <p className="text-gray-500">Belum ada kegiatan.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="border-b px-4 py-2 text-left">Foto</th>
                <th className="border-b px-4 py-2 text-left">Judul</th>
                <th className="border-b px-4 py-2 text-left">Deskripsi</th>
                <th className="border-b px-4 py-2 text-left">Tanggal</th>
                <th className="border-b px-4 py-2 text-center">Dibuat pada</th>
                <th className="border-b px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      src={activity.imageUrl || LogoKMM}
                      alt={activity.title}
                      className="h-12 w-18 rounded object-cover object-center"
                    />
                  </td>
                  <td className="px-4 py-2">{activity.title}</td>
                  <td className="px-4 py-2">{activity.description}</td>
                  <td className="px-4 py-2">{formatDate(activity.date)}</td>
                  <td className="px-4 py-2">{formatDate(activity.createdDate)}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                      onClick={() => onDelete(activity.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Loading = () => (
  <div
    id="overlay"
    class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <div role="status" class="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2">
      <svg
        aria-hidden="true"
        class="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
);
