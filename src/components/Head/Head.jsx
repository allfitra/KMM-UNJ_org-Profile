import { Helmet } from 'react-helmet-async';

export const Head = ({ title, description }) => {
  const pageTitle = title ? `KMM-UNJ | ${title}` : 'KMM-UNJ';

  return (
    <Helmet>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      <meta
        property="og:description"
        content="Bergabung bersama mahasiswa Minangkabau di UNJ untuk membangun dan melestarikan budaya."
      />
      <meta property="og:title" content="KMahasiswa Minangkabau UNJ" />
      <meta property="og:url" content="https://kmm-unj.vercel.app/" />
      <meta property="og:image" content="https://kmm-unj.vercel.app/preview.png" />
    </Helmet>
  );
};
