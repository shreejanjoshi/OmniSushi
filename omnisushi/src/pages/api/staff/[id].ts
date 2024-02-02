import { StaffApiSingleMember } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.TOKEN;

  const id = parseInt(req.query.id as string);

  if (req.method == "GET") {
    try {
      const response = await fetch(`http://localhost:1337/api/staffs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData: StaffApiSingleMember = await response.json();

      res.status(200).json({
        id: responseData.data.id,
        name: responseData.data.attributes.name,
        role: responseData.data.attributes.role,
        department: responseData.data.attributes.department,
        description: responseData.data.attributes.description,
        image: responseData.data.attributes.image,
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
