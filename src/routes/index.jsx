import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { OrganizationPage } from '@/pages/organization';
import { ActivityPage } from '@/pages/activity';
import { ContactPage } from '@/pages/contact';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/organisasi" element={<OrganizationPage />} />
      <Route path="/kegiatan" element={<ActivityPage />} />
      <Route path="/kontak" element={<ContactPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
