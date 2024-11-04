import fetchAllArticle from "@/lib/fetchAllArticles";
import { Suspense } from "react";
import ArticlesInfo from "./components/ArticlesInfo";

async function ArticleData(articleSlug: string) {
  const articleData = await fetchAllArticle(
    `populate=*&filters[slug][$eq]=${articleSlug}`
  ); // TODO remove hardcode

  const article = articleData.data[0];
  return article;
}

export default async function ArticleDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ArticleData(slug);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticlesInfo promise={article} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const articles = await fetchAllArticle("populate=*&fields[0]=slug"); // TODO remove hardcode
  return articles.data.map((article) => ({
    slug: article.slug,
  }));
}
