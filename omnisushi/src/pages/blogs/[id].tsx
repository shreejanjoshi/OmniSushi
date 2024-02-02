import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import HashtagHeader from "@/components/hashtagHeader";
import { Blog, BlogApiAllList, BlogApiSingleList } from "@/types";
import HomeLayout from "@/components/home/homeLayout";
import BlogDetailsLayout from "@/components/Blog/blogDetailsLayout";

interface Paths extends ParsedUrlQuery {
  id: string;
}

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

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const token = process.env.TOKEN;

  const response = await fetch("http://localhost:1337/api/blogs?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData: BlogApiAllList = await response.json();

  let paths = responseData.data.map((blog) => ({
    params: {
      id: blog.id.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogProps, Paths> = async (
  context
) => {
  let id = parseInt(context.params?.id as string);

  const token = process.env.TOKEN;

  const response = await fetch(
    `http://localhost:1337/api/blogs/${id}?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const blog: BlogApiSingleList = await response.json();

  let blogs = await loadBlog();

  return {
    props: {
      blog: blog.data.attributes,
      blogs: blogs,
    },
  };
};

// Function to shuffle the array
// const shuffleArray = (array: Blog[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }

//   return array;
// };

interface BlogProps {
  blog: Blog;
  blogs: Blog[];
}

const BlogPost = ({ blog, blogs }: BlogProps) => {
  let blogPostWithoutCurrentOne: Blog[] = blogs.filter(
    (allBlogs) => allBlogs.title !== blog.title
  );

  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        {/* header title */}
        <HashtagHeader
          title="Blog"
          description="Feel free to discover and expand your knowledge!"
        />

        <BlogDetailsLayout blog={blog} />

        <HomeLayout
          title="Recent Blogs"
          link="/blogs"
          blogs={blogPostWithoutCurrentOne}
        />
      </article>
    </>
  );
};

export default BlogPost;
