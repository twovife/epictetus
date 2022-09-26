import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [searchfield, setsearchfield] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  const navlinkOnclick = () => {
    setOffcanvas(false);
  };

  return (
    <nav className="py-8 lg:py-16 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-2 lg:hidden">
            <button className="rounded bg-gray-800 p-2.5" onClick={() => setOffcanvas(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="col-span-8 lg:col-span-2 flex items-center justify-center lg:justify-start">
            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-xl">E</div>
            <span className="text-xl">Epictetus</span>
          </div>
          <div
            className={`lg:col-span-8 lg:h-full lg:flex lg:items-center fixed lg:static h-screen w-full top-0 left-0 bg-gray-800 lg:bg-transparent transition-all duration-300 ${
              offcanvas ? `left-0` : `-left-full`
            }`}
          >
            <button onClick={() => setOffcanvas(false)} className="absolute right-0 mr-4 my-8 border p-2 rounded-full lg:hidden z-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="space-x-0 space-y-8 lg:space-x-11 lg:space-y-0 flex flex-col lg:flex-row items-center h-full justify-center">
              <li>
                <a href="#" className="hover:underline fucus:undeline" onClick={() => navlinkOnclick()}>
                  Ui Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline fucus:undeline" onClick={() => navlinkOnclick()}>
                  Front-end
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline fucus:undeline" onClick={() => navlinkOnclick()}>
                  Back-end
                </a>
              </li>
              <li className="relative">
                <a href="#" className="hover:underline flex items-center gap-2" onClick={() => setDropdown(!dropdown)}>
                  Lainnya
                  <svg
                    className={"w-4 h-4 transition-all duration-300" + (dropdown ? " rotate-180" : "")}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>

                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 bg-opacity-90 rounded shadow-xl mt-4 transition origin-top-right transform">
                    {dropdownList.map(({ text, href }) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <a href={href} className="flex py-3 px-6 hover:bg-gray-700">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="col-span-2 flex justify-end">
            <form
              className={`flex items-center absolute w-full px-4 transition-all duration-700 lg:hidden ${
                searchfield ? `right-0 opacity-100` : `-right-full opacity-0`
              }`}
            >
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-800 rounded block w-full pl-10 p-2.5" placeholder="Search" required />
                <div onClick={() => setsearchfield(false)} className="flex absolute right-0 inset-y-0 text-black pr-3 hover:cursor-pointer items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </form>
            <button className="rounded bg-gray-800 p-2.5 lg:hidden" onClick={() => setsearchfield(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <form className="items-center lg:flex hidden">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="pl-10 py-3 rounded-full bg-gray-800 bg-opacity-90 focus:outline-none focus:ring-1 focus:ring-gray-500 w-full"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </nav>
  );
}
