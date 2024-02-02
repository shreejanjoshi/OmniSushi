import { BlogApiAllList } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.TOKEN;

  if (req.method == "GET") {
    const response = await fetch(
      "http://localhost:1337/api/blogs?populate=*/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const responseData: BlogApiAllList = await response.json();

    res.status(200).json(
      responseData.data.map((blog) => {
        return {
          id: blog.id,
          title: blog.attributes.title,
          image: blog.attributes.image,
          createdAt: blog.attributes.createdAt,
        };
      })
    );
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
};

export default handler;
