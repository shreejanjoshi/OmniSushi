import { GetStaticProps } from "next";
import HashtagHeader from "@/components/hashtagHeader";
import Card from "@/components/Card";
import { Blog, BlogApiAllList } from "@/types";

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

export const getStaticProps: GetStaticProps<BlogsProps> = async () => {
  let blogs = await loadBlog();

  // blogs = blogs.map((blog) => ({
  //   ...blog,
  //   date: new Date(blog.createdAt).toLocaleDateString("nl-BE"),
  // }));

  return {
    props: {
      blogs: blogs,
    },
  };
};

interface BlogsProps {
  blogs: Blog[];
}

const BlogPosts = ({ blogs }: BlogsProps) => {
  let newBlogFirst: Blog[] = [...blogs];
  newBlogFirst.reverse();

  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        {/* header title */}
        <HashtagHeader
          title="All blog posts"
          description="Feel free to discover and expand your knowledge!"
        />

        <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
          {newBlogFirst.map((blog) => (
            <Card
              key={blog.id}
              id={blog.id!}
              image={blog.image}
              link="/blogs/"
              title={blog.title}
              subTitle={new Date(blog.createdAt).toLocaleDateString("nl-BE")}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default BlogPosts;
