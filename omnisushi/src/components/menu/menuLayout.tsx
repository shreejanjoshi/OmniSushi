import { Menu } from "@/types";
import Card from "../Card";

interface MenuLayoutProps {
  title: string;
  menus: Menu[];
  mealOrDrink: string;
}

const MenuLayout = ({ title, menus, mealOrDrink }: MenuLayoutProps) => {
  return (
    <>
      <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col  items-center justify-center">
        <div className="w-full flex  justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
          {/* need map here */}

          {menus.map((menu) => {
            if (menu.menuType == mealOrDrink) {
              return (
                <Card
                  key={menu.id}
                  id={menu.id!}
                  image={menu.image}
                  link="/menu/"
                  title={menu.name}
                  subTitle={menu.price}
                />
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default MenuLayout;
