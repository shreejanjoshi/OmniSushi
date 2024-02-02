import { MenuApiAllList } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.TOKEN;

  console.log("------------------start-----------------------");

  if (req.method == "GET") {
    const response = await fetch("http://localhost:1337/api/menus", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("-----------Response Status:---------------");
    console.log(response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData: MenuApiAllList = await response.json();

    console.log("-----------Fetched Data:---------------");
    console.log(responseData);

    console.log("-----------look for:---------------");
    console.log(responseData);
    // console.log(responseData.data[0].attributes.name);
    console.log(responseData.data.length);

    res.status(200).json(
      responseData.data.map((menu) => {
        return {
          id: menu.id,
          name: menu.attributes.name,
          image: menu.attributes.image,
          menuType: menu.attributes.menuType,
          price: menu.attributes.price,
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
