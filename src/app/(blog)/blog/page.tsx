import qs from "qs";

// import { Button } from "@/components/ui/button";
import getStrapiData from "@/lib/getStrapiData";
import Recently from "@/components/RecentlyPublished";

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
  const strapiData = await getStrapiData(articlesPath, articlesQuery);

  const { blocks, cover } = strapiData.data;
  console.dir(blocks, { depth: null } + "\n" + cover);
  return <Recently />;
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
