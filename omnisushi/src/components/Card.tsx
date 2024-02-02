import Link from "next/link";

interface CardProps {
  id: number;
  image: string;
  link: string;
  title: string;
  subTitle: string;
}

const Card = ({ id, image, link, title, subTitle }: CardProps) => {
  return (
    <>
      <article className="col-span-1 row-span-1 relative">
        <div className="group flex flex-col items-center text-myOrangeDrak">
          <Link
            href={`${link}${id}`}
            className="h-full rounded-xl overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              width={718}
              height={404}
              className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
              sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
            />
          </Link>

          <div className="flex flex-col w-full mt-4">
            <Link href={`${link}${id}`} className="inline-block my-1">
              <h2 className="font-semibold capitalize  text-base sm:text-lg">
                <span
                  className="bg-gradient-to-r from-myOrange to-myOrangeDrak dark:from-accentDark/50 
                            dark:to-myOrangeDark/50
                            bg-[length:0px_6px]
                            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                >
                  {title}
                </span>
              </h2>
            </Link>

            <span className="capitalize text-gray font-semibold text-sm  sm:text-base">
              {link.includes("menu") && `€ `}
              {subTitle}
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
