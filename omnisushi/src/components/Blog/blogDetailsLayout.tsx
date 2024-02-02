import { Blog } from "@/types";
import Link from "next/link";

interface BlogDetailsLayoutProps {
  blog: Blog;
}

const BlogDetailsLayout = ({ blog }: BlogDetailsLayoutProps) => {
  return (
    <>
      <div className="mt-16 mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            {blog.short}
          </h1>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />

        <img
          src={blog.image}
          alt={blog.title}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>

      <div className=" px-5 sm:px-10  md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          {blog.title}
        </h1>
        <p className="font-semibold sm:inline-block mt-16 md:text-lg lg:text-xl font-in">
          {blog.short}
        </p>
        <p className="sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
          {blog.fullText}
        </p>
        <br />

        <span className="mt-2 inline-block">
          <Link href={`/staff/${blog.author?.data.id}`}>
            <img
              src={blog.author?.data.attributes.image}
              alt={blog.author?.data.attributes.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            By: {blog.author?.data.attributes.name}
          </Link>
        </span>

        <span className="mt-2 inline-block">
          {new Date(blog.createdAt).toLocaleDateString("nl-BE")}
        </span>
      </div>
    </>
  );
};

export default BlogDetailsLayout;
