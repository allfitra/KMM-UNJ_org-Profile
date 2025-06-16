import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { OrganizationPage } from '@/pages/organization';
import { ActivityPage } from '@/pages/activity';
import { ContactPage } from '@/pages/contact';
import { ActivityAdminPage } from '@/pages/Admin/activity';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/organisasi" element={<OrganizationPage />} />
      <Route path="/kegiatan" element={<ActivityPage />} />
      <Route path="/kontak" element={<ContactPage />} />

      {/* Admin routes */}
      <Route path="/admin001" element={<ActivityAdminPage />} />

      {/* Catch-all route for 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
