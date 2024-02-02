import { BlogApiSingleList } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.TOKEN;

  const id = parseInt(req.query.id as string);

  if (req.method == "GET") {
    try {
      const response = await fetch(
        `http://localhost:1337/api/blogs/${id}?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData: BlogApiSingleList = await response.json();

      res.status(200).json({
        id: responseData.data.id,
        title: responseData.data.attributes.title,
        short: responseData.data.attributes.short,
        fullText: responseData.data.attributes.fullText,
        image: responseData.data.attributes.image,
        createdAt: responseData.data.attributes.createdAt,
        author: responseData.data.attributes.author.data.attributes.name,
      });
    } catch (e) {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
};

export default handler;
