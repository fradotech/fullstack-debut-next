import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

export const nextConnectHandler = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: error.message });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
