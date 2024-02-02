import { GetStaticProps } from "next";
import Hero from "@/components/hero";
import MenuLayout from "@/components/menu/menuLayout";
import { Menu, MenuApiAllList } from "@/types";

const loadMenu = async () => {
  const token = process.env.TOKEN;

  const response = await fetch("http://localhost:1337/api/menus", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData: MenuApiAllList = await response.json();

  const menus = responseData.data.map((menu) => {
    return {
      id: menu.id,
      name: menu.attributes.name,
      image: menu.attributes.image,
      menuType: menu.attributes.menuType,
      price: menu.attributes.price,
    };
  });

  return menus;
};

export const getStaticProps: GetStaticProps<MenuProps> = async () => {
  let menus = await loadMenu();

  return {
    props: {
      menus: menus,
    },
  };
};

interface MenuProps {
  menus: Menu[];
}

const Menu = ({ menus }: MenuProps) => {
  // console.log(menus);
  return (
    <main className="flex flex-col items-center justify-center mb-52">
      {/* hero section */}
      <Hero
        title="Menu"
        description="Navigate to Omni Sushi's Menu page to explore the culinary tapestry that defines our restaurant, showcasing a diverse array of meticulously crafted dishes that blend traditional Japanese flavors with modern creativity, offering a delightful journey for your taste buds.."
        img="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1702218485/menu_471fee67ac.png"
        link=""
        button="Home"
      />

      {/* meals */}
      <MenuLayout title="Meals" menus={menus} mealOrDrink="meal" />

      {/* drinks */}
      <MenuLayout title="Drinks" menus={menus} mealOrDrink="drink" />
    </main>
  );
};

export default Menu;
