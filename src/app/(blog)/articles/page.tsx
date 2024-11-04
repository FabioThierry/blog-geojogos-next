import { fetchAllArticles } from "@/lib/getArticles";
import { Button } from "@/components/ui/button";

export default async function ArticlesPage() {
  const articles = await fetchAllArticles("sort[0]=title:asc"); // TODO remove hardcode

  const { data } = articles;

  const content = (
    <section>
      <h2>Articles</h2>
      <hr />
      <br />
      {data.map((article) => {
        return (
          <article key={article.id}>
            <h3>{article.title}</h3>
            <Button variant="outline">Button</Button>

            <p>{article.description}</p>
            <hr />
            <br />
          </article>
        );
      })}
    </section>
  );
  return content;
}
