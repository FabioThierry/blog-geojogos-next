import { ARTICLES_URL } from "@/config/app-config";
import { ResponseData } from "@/lib/types/types";

export default async function fetchAllArticles(
  query: string = ""
): Promise<ResponseData> {
  const res = await fetch(`${ARTICLES_URL}?${query}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch users");
  }

  return res.json();
}
