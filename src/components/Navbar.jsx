import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themes } from '@/utils/theme';
import { useTheme } from '@/utils/themeContext';
import { LogoKMM, LogoKMMcircle, LogoKMMnbg } from '@/assets/Content';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const { theme, changeTheme } = useTheme();
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: 'Dashboard', href: '/' },
    { name: 'Stuktur Organisasi', href: '/organisasi' },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Contact', href: '/kontak' },
  ]);

  useEffect(() => {
    window.scrollTo(1, 0);
  }, [location.pathname]);

  useEffect(() => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: location.pathname === item.href,
    }));
    setNavigation(updatedNavigation);
  }, [location.pathname]);

  return (
    <>
      <WebNavbar navigation={navigation} location={location} theme={theme} />
      {/* <MobileNavbar /> */}
    </>
  );
};

const WebNavbar = ({ navigation, location, theme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        'container fixed top-0 z-20 hidden h-[95px] w-full max-w-none px-6 pb-6 transition duration-200 lg:block',
        scrolled ? 'bg-[#01663f] text-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="flex justify-center">
        <div className="relative flex h-20 w-full max-w-7xl items-center justify-between md:px-14">
          <Link to="/">
            <div className="flex">
              <img
                className="ml-0 mt-4 h-[60px] w-[60px] xl:ml-2"
                src={LogoKMMcircle}
                alt="KMM Logos"
              />
              <div className="ml-4 mt-5">
                <h2 className="text-lg">Keluarga Mahasiswa Minang</h2>
                <h3 className="text-xs">Universitas Negeri Jakarta</h3>
              </div>
            </div>
          </Link>

          <div className="flex flex-shrink-0 items-center">
            <div className="mt-5 flex space-x-3">
              {navigation.map((item) => (
                <div key={item.name} className="rounded p-1.5 transition duration-300 ease-in-out">
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current && 'font-bold',
                      'rounded-md px-2 py-2 font-heading text-base'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={classNames('flex justify-center', scrolled ? '' : 'hidden')}>
        <hr className="mt-[13px] w-[90%] border-t-2 border-black" />
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      className="mt-50 fixed bottom-2 left-0 z-50 w-full bg-none px-3 lg:hidden"
      style={theme === 'dark' ? themes.dark : themes.light}
    >
      <div className="mb-[-15px] flex justify-center">navbar mobile</div>
    </nav>
  );
};
