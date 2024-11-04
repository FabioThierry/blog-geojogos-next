import { ARTICLES_URL } from "@/config/app-config";
import { Article, ResponseData } from "@/lib/types/types";

export default async function getArticle(
  slug: string | string[] = ""
): Promise<Article> {
  const res = await fetch(`${ARTICLES_URL}/${slug}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch users");
  }

  const response: ResponseData = await res.json();
  const { data } = response;

  return data[0];
}
