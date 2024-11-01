import getAllArticles from "@/lib/getAllArticles";

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  const content = (
    <section>
      <h2>Articles</h2>

      {articles.map((article) => {
        return (
          <article key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </article>
        );
      })}
    </section>
  );
  return content;
}
