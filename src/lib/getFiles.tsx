import { FILES_URL } from "@/config/app-config";
import { ResponseData } from "./types/types";

export async function getFileById(id: string = ""): Promise<ResponseData> {
  const res = await fetch(`${FILES_URL}?filters[id]=${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch users");
  }

  return res.json();
}
