import { ARTICLES_URL } from "@/config/app-config";
import { Article, ResponseData } from "@/types/types";

export default async function getAllArticles(): Promise<Article[]> {
  const res = await fetch(`${ARTICLES_URL}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch users");
  }

  const promissedData = (await res.json()) as ResponseData;
  const articles: Article[] = promissedData.data;

  return articles;
}
