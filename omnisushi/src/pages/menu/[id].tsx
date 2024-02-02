import HashtagHeader from "@/components/hashtagHeader";
import MenuDetailsLayout from "@/components/menu/menuDetailsLayout";
import { Menu, MenuApiAllList, MenuApiSingleLists } from "@/types";

export const getStaticPaths = async () => {
  const token = process.env.TOKEN;

  const response = await fetch("http://localhost:1337/api/menus", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData: MenuApiAllList = await response.json();

  let paths = responseData.data.map((menu) => ({
    params: {
      id: menu.id.toString(),
    },
  }));

  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const token = process.env.TOKEN;

  const response = await fetch(`http://localhost:1337/api/menus/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const menu: MenuApiSingleLists = await response.json();

  return {
    props: {
      menu: menu.data.attributes,
    },
  };
};

interface MenuDetailsProps {
  menu: Menu;
}

const MenuDetails = ({ menu }: MenuDetailsProps) => {
  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        <HashtagHeader
          title="Menu"
          description="Feel free to discover our food"
        />

        <MenuDetailsLayout menu={menu} />
      </article>
    </>
  );
};

export default MenuDetails;
