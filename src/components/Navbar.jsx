import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themes } from '@/utils/theme';
import { useTheme } from '@/utils/themeContext';
import { LogoKMMcircle } from '@/assets/Content';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const { theme, changeTheme } = useTheme();

  const [navigation, setNavigation] = useState([
    { name: 'Dashboard', href: '/' },
    { name: 'Stuktur Organisasi', href: '/organisasi' },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Kontak', href: '/kontak' },
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
      <MobileNavbar navigation={navigation} location={location} theme={theme} />
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
        'container fixed top-0 z-20 hidden h-[95px] w-full max-w-none px-6 pb-6 text-white transition duration-200 lg:block',
        scrolled && location.pathname === '/'
          ? 'bg-[#01663f] shadow-md'
          : location.pathname !== '/'
          ? 'bg-[#01663f] shadow-md'
          : 'bg-transparent'
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
                      'rounded-md px-2 py-2 font-heading text-sm'
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
      <div
        className={classNames(
          'flex justify-center',
          scrolled && location.pathname === '/' ? '' : location.pathname !== '/' ? '' : 'hidden'
        )}
      >
        <hr className="mt-[13px] w-[90%] border-t-2 border-[#fbd600]" />
      </div>
    </nav>
  );
};

const MobileNavbar = ({ navigation, location, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={classNames(
        'container fixed top-0 z-20 block h-[95px] w-full max-w-none px-8 pb-6 text-white transition duration-200 md:hidden',
        'bg-[#01663f] shadow-md'
      )}
    >
      <div className="flex justify-center">
        <div className="relative flex h-20 w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex">
              <img
                className="ml-0 mt-4 h-[50px] w-[50px] xl:ml-2"
                src={LogoKMMcircle}
                alt="KMM Logos"
              />
              <div className="ml-2 mt-5">
                <h2 className="text-base">Keluarga Mahasiswa Minang</h2>
                <h3 className="text-xs">Universitas Negeri Jakarta</h3>
              </div>
            </div>
          </Link>

          {/* Burger Button */}
          <div className="mt-5 flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center rounded focus:outline-none"
              aria-label="Open menu"
            >
              <span
                className={classNames(
                  'mb-2 block h-0.5 w-8 bg-white transition-transform duration-300',
                  isOpen && 'translate-y-2 rotate-45'
                )}
              ></span>
              <span
                className={classNames(
                  'mb-2 block h-0.5 w-8 bg-white transition-opacity duration-300',
                  isOpen && 'opacity-0'
                )}
              ></span>
              <span
                className={classNames(
                  'block h-0.5 w-8 bg-white transition-transform duration-300',
                  isOpen && '-translate-y-3 -rotate-45'
                )}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center">
        <hr className="mt-[13px] w-[100%] border-t-2 border-[#fbd600]" />
      </div>

      {/* Dropdown menu */}
      <div
        className={classNames(
          'ease-in-ou mt-1 w-full overflow-hidden rounded-b-2xl bg-[#01663f] text-center shadow-md transition-all duration-500',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        {navigation.map((item) => (
          <div key={item.name} className="px-2 py-1.5">
            <Link
              to={item.href}
              className={classNames(
                item.current && 'font-bold',
                'block rounded-md px-4 py-2 font-heading text-sm text-white transition hover:bg-[#014f30]'
              )}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
