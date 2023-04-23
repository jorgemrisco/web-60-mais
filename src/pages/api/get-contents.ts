import db from "@src/utils/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

export interface ContentDto {
  id: string;
  image: {
    url: string;
    alt?: string;
  };
  externalLinks: {
    link: string;
    title: string;
  }[];
  shortDescription: string;
  subscribeLink: string;
  timeInfo: {
    daysOfTheWeek: string[];
    endDate: { seconds: number; nanoseconds: number };
    startDate: { seconds: number; nanoseconds: number };
    timePerClassInMinutes: number;
  };
  title: string;
}

async function getContents(): Promise<ContentDto[]> {
  const contentRef = db.collection("content");
  const snapshot = await contentRef.get();

  const contents = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<ContentDto, "id">),
  }));

  return contents;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const contents = await getContents();
    res.status(200).json({ data: { contents } });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch content data" });
  }
}
