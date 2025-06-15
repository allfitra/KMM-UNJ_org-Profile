import { Helmet } from "react-helmet-async";

export const Head = ({ title, description }) => {
  const pageTitle = title ? `KMM-UNJ | ${title}` : "KMM-UNJ";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};
