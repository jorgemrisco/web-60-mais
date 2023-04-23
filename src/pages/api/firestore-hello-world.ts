import type { NextApiRequest, NextApiResponse } from "next";
import db from "@utils/firebase";

const testConnection = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const testCollection = db.collection("hello-world");
    const snapshot = await testCollection.get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default testConnection;
