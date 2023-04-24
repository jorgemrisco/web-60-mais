import db from "@src/utils/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

export interface ContactDto {
  address?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  phoneNumber?: number;
}

async function getContact(): Promise<ContactDto> {
  const contentRef = db.collection("contact");
  const snapshot = await contentRef.get();

  // Não faz sentido termos uma array de docs de contato, então pegamos o primeiro da lista
  const contact = snapshot.docs[0].data() as ContactDto;

  return contact;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const contact = await getContact();
    res.status(200).json({ data: { contact } });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact data" });
  }
}
