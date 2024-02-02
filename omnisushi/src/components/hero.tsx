import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
  img: string;
  link: string;
  button: string;
}

const Hero = ({ title, description, img, link, button }: HeroProps) => {
  return (
    <>
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div
            className="absolute top-0 left-0 bottom-0 right-0 h-full
                    bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
                    "
          />

          {/* <img src="/home2.jpg" alt="" 
                    className="w-full h-full object-center object-cover rounded-3xl -z-10"/> */}

          <Image
            src={img}
            alt="sushi image"
            fill
            className="w-full h-full object-center object-cover rounded-3xl -z-10"
            sizes="100vw"
            priority
          />

          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {title}
              </span>
            </h1>

            <p className="hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
              {description}
            </p>

            <Link
              href={`/${link}`}
              className="inline-block py-2 sm:py-3 px-6 sm:px-10 mt-6 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"
            >
              {button}
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default Hero;
