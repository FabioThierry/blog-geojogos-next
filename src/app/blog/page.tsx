import qs from "qs";

// import { Button } from "@/components/ui/button";
import getStrapiData from "@/lib/getStrapiData";
import Recently from "@/components/RecentlyPublished";
import BlogUpdatesSection from "@/components/BlogUpdatesSection";

export const metadata = {
  title: "Artigos",
};

const articlesPath = "/api/articles";

const articlesQuery = qs.stringify({
  populate: {
    category: { fields: ["name"] },
    author: { fields: ["name"] },
  },
});
export default async function Blog() {
  const strapiData: ResponseData<Articles[]> = await getStrapiData(
    articlesPath,
    articlesQuery
  );

  const blogPosts = strapiData.data;
  return (
    <>
      <BlogUpdatesSection props={blogPosts} />
      <Recently props={strapiData.data} />
    </>
  );
}

// const content = (
//   <section>
//     <h2>Articles</h2>
//     <hr />
//     <br />
//     {data.map((article) => {
//       return (
//         <article key={article.id}>
//           <h3>{article.title}</h3>
//           <Button variant="outline">Button</Button>

//           <p>{article.description}</p>
//           <hr />
//           <br />
//         </article>
//       );
//     })}
//   </section>
//   return content;
