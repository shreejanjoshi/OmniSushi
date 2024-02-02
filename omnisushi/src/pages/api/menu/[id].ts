import { MenuApiSingleLists } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.TOKEN;

  const id = parseInt(req.query.id as string);
  console.log("------------------start-----------------------");

  if (req.method == "GET") {
    try {
      const response = await fetch(`http://localhost:1337/api/menus/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("-----------Response Status:---------------");
      console.log(response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData: MenuApiSingleLists = await response.json();

      console.log("-----------Fetched Data:---------------");
      console.log(responseData);

      console.log("-----------look for:---------------");
      console.log(responseData.data.id);
      console.log(responseData.data.attributes.name);

      res.status(200).json({
        id: responseData.data.id,
        name: responseData.data.attributes.name,
        description: responseData.data.attributes.description,
        image: responseData.data.attributes.image,
        menuType: responseData.data.attributes.menuType,
        price: responseData.data.attributes.price,
      });
    } catch (e) {
      console.log("-----------Error:---------------");
      console.log(e);

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
