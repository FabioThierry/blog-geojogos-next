import qs from "qs";

// import { Button } from "@/components/ui/button";
import getStrapiData from "@/lib/getStrapiData";
import Recently from "@/components/RecentlyPublished";
import { ResponseData } from "@/lib/types/default";

export const metadata = {
  title: "Artigos",
};

const articlesPath = "/api/articles";

const articlesQuery = qs.stringify({
  populate: {
    cover: { fields: ["*"] },
    blocks: {
      on: {
        "shared.slider": {
          populate: {
            files: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },
    },
  },
});

export default async function Page() {
  const strapiData: ResponseData<Article[]> = await getStrapiData(
    articlesPath,
    articlesQuery
  );

  // strapiData.data.forEach((item) => {
  // //   const { blocks, cover } = item;
  // //   console.log(blocks, cover);
  // // });

  return (
    <>
      <Recently articles={strapiData.data} />
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
