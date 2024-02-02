import { FacebookIcon, SunIcon, TwitterIcon } from "@/Icons";

const Footer = () => {
  return (
    <>
      <footer className="mt-16 rounded-2xl bg-dark dark:bg-myOrange/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
        <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
          Interesting Stories | Updates | Guides
        </h3>

        <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
          Follow me on social media to stay updated on the latest technology and
          receive timely news and updates. Stay in touch for the most recent
          developments in the tech world!
        </p>

        <div className="flex items-center mt-8">
          <a
            href="https://www.facebook.com/"
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
          >
            <FacebookIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href="https://twitter.com/"
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via Twitter"
            target="_blank"
          >
            <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
        </div>

        <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
          <span className="text-center">
            &copy;2023 Shreejan. All rights reserved.
          </span>
          <div className="text-center">
            Made with &hearts; by{" "}
            <a
              href="https://learning.ap.be/my/"
              className="underline"
              target="_blank"
            >
              Shreejan Joshi
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
  
