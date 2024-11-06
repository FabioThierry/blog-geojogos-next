import { STRAPI_API_URL } from "@/config/app-config";

export default async function getStrapiData(path: string, query: string) {
  const baseUrl = STRAPI_API_URL;

  const url = new URL(path, baseUrl);
  url.search = query;

  try {
    const response = await fetch(url.href);
    const data = await response.json();

    // console.dir(data, { depth: null });
    return data;
  } catch (error) {
    console.error(error);
  }
}
