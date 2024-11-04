import { fetchAllArticles, articleData } from "@/lib/getArticles";
import { Suspense } from "react";
import ArticlesInfo from "./components/ArticlesInfo";

export default async function ArticleDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleData(slug);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticlesInfo promise={article} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const articles = await fetchAllArticles("populate=*&fields[0]=slug"); // TODO remove hardcode
  return articles.data.map((article) => ({
    slug: article.slug,
  }));
}
