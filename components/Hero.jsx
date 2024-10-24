"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const router = useRouter()
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-24 items-center">
      <div className="mx-auto h-full w-full items-center px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
        <nav className="flex h-full items-center justify-between">
          <div className="flex min-w-max items-center">
          <button onClick={()=>{router.push("/expense-tracker")}}

              className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700 dark:text-gray-300"
            >
              <div className="flex items-center -space-x-3 font-semibold">
                <span className="flex aspect-square h-6 rounded-full bg-purple-600 dark:bg-purple-400" />
                <span className="flex aspect-square h-6 rounded-full bg-gray-600 dark:bg-white" />
              </div>
              InvestED
            </button>
          </div>
          <div
            className={`fixed inset-0 top-0 flex h-[100dvh] flex-col space-y-10 bg-white px-5 py-20 transition-all duration-300 ease-linear dark:bg-gray-950 sm:px-10 md:px-14 lg:relative lg:top-0 lg:h-full lg:w-max lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:gap-x-10 lg:space-y-0 lg:!bg-transparent lg:px-0 lg:py-0 ${openNavbar ? "visible translate-y-0 opacity-100" : "invisible -translate-y-9 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"} `}
          >
            <ul className="flex flex-col gap-y-5 text-gray-700 dark:text-gray-300 lg:h-full lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-x-5">
              <li>
                <Link
                  href="#"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                >
                  Company
                </Link>
              </li>
            </ul>
            <div className="flex w-full sm:w-max lg:min-w-max lg:items-center">
              <Link
                href="/sign-up"
                className="flex items-center justify-center gap-x-3 border-b bg-transparent text-gray-700 hover:border-b-gray-900 hover:text-gray-900 dark:border-purple-300 dark:text-gray-300 dark:hover:border-b-white dark:hover:text-white"
              >
                Register
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="z-60 relative flex items-center justify-end lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="relative flex aspect-square w-12 flex-col items-center justify-center rounded-full bg-purple-600 p-3 outline-none dark:bg-purple-500"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`h-0.5 w-6 rounded-full bg-gray-300 transition-transform duration-300 ease-linear ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""} `}
              />
              <span
                className={`mt-1 h-0.5 w-6 origin-center rounded-full bg-gray-300 transition-all duration-300 ease-linear ${openNavbar ? "scale-x-0 opacity-0" : ""} `}
              />
              <span
                className={`mt-1 h-0.5 w-6 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""} `}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default function HeroSection() {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <section className="relative flex h-[100dvh] min-h-max items-center overflow-hidden bg-gray-100 py-32 dark:bg-gray-900 sm:py-36 lg:py-40">
        <div className="absolute left-0 top-0 aspect-square w-2/5 -translate-x-[54%] -translate-y-[70%] rounded-full bg-purple-600/70 opacity-50 blur-3xl backdrop-filter" />
        <div className="absolute bottom-0 right-0 aspect-square w-2/5 translate-x-[54%] translate-y-[70%] rounded-full bg-purple-600/70 opacity-50 blur-3xl backdrop-filter" />
        <div className="absolute right-0 top-0 aspect-square w-[48%] min-w-[300px] -translate-y-[40%] translate-x-[40%] rounded-full bg-gradient-to-r from-purple-400/5 md:w-2/5">
          <div className="inset-[10%] rounded-full bg-gradient-to-l from-purple-400/20">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-purple-400/30" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 aspect-square w-[48%] min-w-[300px] -translate-x-[40%] translate-y-[40%] rounded-full bg-gradient-to-l from-purple-400/5 md:w-2/5">
          <div className="inset-[10%] rounded-full bg-gradient-to-r from-purple-400/40">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-purple-400/50" />
          </div>
        </div>
        <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
          <div className="flex flex-col items-center space-y-10 text-center">
            <span className="rounded-full border border-gray-500 bg-gray-50 bg-opacity-50 px-3 py-0.5 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
              Creativity in mind
            </span>
            <h1 className="max-w-4xl text-4xl font-bold capitalize text-gray-900 dark:text-white md:text-5xl lg:text-6xl/tight xl:text-7xl/tight">
              Make your finances move
            </h1>
            <p className="max-w-xl text-center text-base text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti earum, qui odio, dolorum labore incidunt ad ab
              porro, provident excepturi molestiae corporis molestias nam
              accusamus.
            </p>
            <div className="flex justify-center">
            <button onClick={()=>{router.push("/expense-tracker")}}
                className="flex h-12 items-center gap-x-3 rounded-full bg-purple-700 px-8 text-white hover:bg-opacity-80"
              >
                Ger Started
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
