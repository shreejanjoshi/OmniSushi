import { Menu } from "@/types";

interface MenuDetailsLayoutProps {
  menu: Menu;
}

const MenuDetailsLayout = ({menu}: MenuDetailsLayoutProps) => {
  return (
    <>
      <div className="mt-16 mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <img
          src={menu.image}
          alt={menu.name}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>

      <div className=" px-5 sm:px-10  md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          {menu.name}
        </h1>
        <p className="font-semibold inline-block mt-16 md:text-lg lg:text-xl font-in">
          {menu.price} €
        </p>
        <p className="inline-block mt-4 md:text-lg lg:text-xl font-in">
          {menu.description}
        </p>
      </div>
    </>
  );
};

export default MenuDetailsLayout;
