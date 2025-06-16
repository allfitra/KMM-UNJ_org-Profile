import { Head } from '@/components/Head';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { themes } from '@/utils/theme';
import { useTheme } from '@/utils/themeContext';
import { useLocation } from 'react-router-dom';

export const MainLayout = ({ title, children }) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Head title={title} />

      <div
        style={theme === 'dark' ? themes.dark : themes.light}
        className={`${isHomePage ? '' : 'pt-36'} `}
      >
        <Navbar />
        <div className="mx-auto flex min-h-[90vh] flex-col overflow-hidden xl:overflow-visible">
          <div className={`${isHomePage ? '' : 'px-10'} `}>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
