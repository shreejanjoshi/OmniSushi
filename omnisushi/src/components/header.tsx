import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <>
      <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between mb-10 mt-4">
        <Link href="/" className="flex items-center text-dark">
          <div className="w-12 md:w-16  rounded-full overflow-hidden mr-2 md:mr-4">
            <img
              src="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1703239642/omnifood_logo_59da005756.png"
              alt="Omni sushi logo"
              className="w-full h-auto rounded-full"
            />
          </div>
          <span className="font-bold dark:font-semibold text-lg md:text-xl">
            OmniSushi
          </span>
        </Link>

        <button
          className="inline-block lg:hidden z-50"
          onClick={toggle}
          aria-label="Hamburger Menu"
        >
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(-45deg) translateY(0)"
                    : "rotate(0deg) translateY(6px)",
                }}
              >
                &nbsp;
              </span>
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark  rounded transition-all ease duration-200"
                style={{
                  opacity: click ? 0 : 1,
                }}
              >
                &nbsp;
              </span>
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark  rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(45deg) translateY(0)"
                    : "rotate(0deg) translateY(-6px)",
                }}
              >
                &nbsp;
              </span>
            </div>
          </div>
        </button>

        {/* rep nav */}
        <nav
          className="w-max py-3 px-6 md:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  lg:hidden
                fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
                transition-all ease duration-300"
          style={{
            top: click ? "" : "-5rem",
          }}
        >
          <Link
            href="/"
            className={`mx-2 ${
              router.pathname == "/" ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`mx-2 ${
              router.pathname == "/about" ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            About
          </Link>
          <Link
            href="/menu"
            className={`mx-2 ${
              router.pathname.includes("/menu") ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className={`mx-2 ${
              router.pathname == "/contact" ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Contact
          </Link>
        </nav>

        {/* full width nav */}
        <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden lg:flex fixed  right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
          <Link
            href="/"
            className={`mx-2 ${
              router.pathname == "/" ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`mx-2 ${
              router.pathname == "/about" ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            About
          </Link>
          <Link
            href="/menu"
            className={`mx-2 ${
              router.pathname.includes("/menu") ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Menu
          </Link>
          <Link
            href="/blogs"
            className={`mx-2 ${
              router.pathname.includes("/blogs") ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Blogs
          </Link>
          <Link
            href="/staff"
            className={`mx-2 ${
              router.pathname.includes("/staff") ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Staff
          </Link>
          <Link
            href="/contact"
            className={`mx-2 ${
              router.pathname == "/contact" ? "text-myOrange" : ""
            } hover:text-myOrangeDark`}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
