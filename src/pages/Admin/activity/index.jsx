import { MainLayout } from '@/components/Layouts';
import { deleteActivity, getActivities, postActivity } from '@/database/fetch-api';
import formatDate from '@/utils/formatdate';
import React, { useEffect, useState } from 'react';

export const ActivityAdminPage = () => {
  const [activities, setActivities] = useState([]);

  // Fetch data saat pertama kali load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getActivities();
        const sorted = getData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setActivities(sorted);
        setActivities(getData);
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
    if (!(image instanceof File) || image.size === 0) {
      alert('Foto kegiatan harus diisi!');
      return;
    }

    const activityData = {
      title: formData.get('title'),
      description: formData.get('description'),
      date: formData.get('date'),
      createdDate: new Date().toISOString(),
    };

    try {
      const docId = await postActivity(activityData);
      const newActivity = { id: docId, ...activityData };
      setActivities((prev) => [newActivity, ...prev]);
      form.reset();
      alert('Kegiatan berhasil disimpan!');
    } catch (error) {
      console.error('Gagal menyimpan:', error);
      alert('Gagal menyimpan kegiatan. Silakan coba lagi.');
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
      <div className="container mx-auto flex flex-col items-center justify-center pb-8">
        <form
          onSubmit={handleSubmitForm}
          className="w-full max-w-md space-y-4 rounded bg-white p-6 shadow-md"
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
