import type { NextApiRequest, NextApiResponse } from "next";

type getItemData = {
  success: boolean;
  message: string;
  data: any;
};

type postItemData = {
  success: boolean;
  message: string;
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const getItemData: getItemData = {
      success: true,
      message: "GET request success!",
      data: { requestQueryData: req.query },
    };
    res.status(200).json(getItemData);
  } else if (req.method === "POST") {
    const postItemData: postItemData = {
      success: true,
      message: "POST request success!",
      data: { requestBodyData: req.body},
    };
    res.status(200).json(postItemData);
  }
}
