import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Hero from "@/components/hero";
import HomeLayout from "@/components/home/homeLayout";
import { Blog, BlogApiAllList, Menu, MenuApiAllList } from "@/types";

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

const loadBlog = async () => {
  const token = process.env.TOKEN;

  const response = await fetch("http://localhost:1337/api/blogs", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData: BlogApiAllList = await response.json();

  const blogs = responseData.data.map((blog) => {
    return {
      id: blog.id,
      title: blog.attributes.title,
      image: blog.attributes.image,
      createdAt: blog.attributes.createdAt,
    };
  });

  return blogs;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let menus = await loadMenu();
  let blogs = await loadBlog();

  // blogs = blogs.map((blog) => ({
  //   ...blog,
  //   date: new Date(blog.date).toLocaleDateString("nl-BE"),
  // }));

  return {
    props: {
      menus: menus,
      blogs: blogs,
    },
  };
};

interface HomeProps {
  menus: Menu[];
  blogs: Blog[];
}

const Home = ({ blogs, menus }: HomeProps) => {
  // const router = useRouter();
  
  // let newBlogFirst: Blog[] = [...blogs];
  // newBlogFirst.reverse();

  return (
    <main className="flex flex-col items-center justify-center mb-52">
      {/* hero section */}
      <Hero
        title="Omni Sushi"
        description="Indulge in the Art of Sushi at Omni Sushi. A Symphony of Flavors, Crafted with Precision and Love. Experience Culinary Excellence with Every Bite."
        img="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1702218194/home_74bea9fc4d.png"
        link="menu"
        button="Menu"
      />

      {/* menu */}
      <HomeLayout title="Menu" link="/menu" menus={menus} />

      {/* recent post */}
      <HomeLayout title="Recent Blogs" link="/blogs" blogs={blogs} />
    </main>
  );
};

export default Home;
