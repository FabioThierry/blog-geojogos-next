import { ARTICLES_URL } from "@/config/app-config";
import { ResponseData } from "@/lib/types/types";

export async function fetchAllArticles(
  query: string = ""
): Promise<ResponseData> {
  const res = await fetch(`${ARTICLES_URL}?${query}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export async function articleData(articleSlug: string) {
  const articleData = await fetchAllArticles(
    `populate=*&filters[slug][$eq]=${articleSlug}`
  ); // TODO remove hardcode

  const article = articleData.data[0];
  return article;
}
