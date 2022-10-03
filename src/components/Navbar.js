import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BsSunFill } from 'react-icons/bs';
import logo from '../assets/logo_transparent.png';

const data = [
  { link: '/', name: 'Books' },
  { link: '/categories', name: 'Categories' },
  { link: '/about', name: 'About' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const closeStyle =
    'w-8 block m-[6px] rounded-full bg-gray-700 h-1 transition-all ease-in-out duration-200 dark:bg-gray-300';

  const handleMode = () => {
    const App = document.getElementById('App');
    App.classList.toggle('dark');
  };

  return (
    <div style={{ fontFamily: 'Montserrat' }}>
      <header className=" bg-slate-100 shadow-lg dark:bg-gray-800 dark:text-slate-100">
        <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-20 md:w-28 mt-2 md:mt-8  ">
              <img className="w-full drop-shadow-2xl " src={logo} alt="logo" />
            </div>
            <div className="md:static relative flex-1">
              <div
                className={` md:translate-x-0 md:translate-y-0 md:static md:w-auto md:opacity-100 md:bg-transparent md:backdrop-blur-0 md:flex-row md:gap-0 flex md:flex-1 transition duration-300 ${
                  !open
                    ? ' -translate-y-96 w-10 md:flex flex-1 justify-between items-center'
                    : 'absolute bg-[#CBD5E155] backdrop-blur-md z-10 flex flex-col gap-5 top-10 w-[100%] mx-auto p-4 rounded-2xl'
                }`}
              >
                <nav className="flex flex-1 flex-col md:flex-row justify-center gap-8 md:gap-0">
                  <ul className="flex flex-col md:items-center text-sm md:text-lg gap-6 md:flex-row">
                    {data.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.link}
                          className={` transition hover:text-gray-500/75 ${
                            location.pathname === item.link
                              ? 'text-[#08ACB4]'
                              : 'text-gray-600 dark:text-slate-100'
                          } `}
                          href="/"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex md:justify-center md:items-center relative w-28">
                    <label
                      htmlFor="AcceptConditions"
                      className="relative w-12 h-[28px] cursor-pointer"
                    >
                      <input type="checkbox" id="AcceptConditions" className="sr-only peer" />
                      <span
                        onClick={handleMode}
                        className="absolute inset-0 bg-[#08ACB4] rounded-full transition peer-checked:bg-gray-700 p-1 flex items-center justify-between"
                      >
                        <BiMoon className=" text-lg text-slate-200" />
                        <BsSunFill className=" text-lg text-amber-500" />
                      </span>
                      <span
                        onClick={handleMode}
                        className="absolute inset-0 w-5 h-5 m-1 bg-white rounded-full transition peer-checked:translate-x-5"
                      />
                    </label>
                  </div>
                </nav>

                <button
                  type="button"
                  className="flex items-center rounded-lg transition group shrink-0 order-first md:order-last"
                >
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://telegra.ph/file/739b30d92daf34ac2ee8f.jpg"
                    alt="Abdelrhman"
                  />
                  <p className=" ml-2 text-xs text-left sm:block">
                    <strong className="block font-medium">Abdelrhman Samy</strong>
                    <span className="text-gray-500 dark:text-gray-300">abd3052001@gmail.com</span>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-5 h-5 ml-4 text-gray-500 transition sm:block group-hover:text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden" onClick={() => setOpen(!open)}>
                <span className={`${closeStyle} ${open ? 'rotate-45 translate-y-[10px]' : ''}`} />
                <span className={`${closeStyle} ${open ? 'opacity-0' : ''}`} />
                <span className={`${closeStyle} ${open ? '-rotate-45 -translate-y-[10px]' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
