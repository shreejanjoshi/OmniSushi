import { StaffApiAllMember } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.TOKEN;

  if (req.method == "GET") {
    const response = await fetch("http://localhost:1337/api/staffs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData: StaffApiAllMember = await response.json();

    res.status(200).json(
      responseData.data.map((staff) => {
        return {
          id: staff.id,
          name: staff.attributes.name,
          role: staff.attributes.role,
          image: staff.attributes.image,
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
