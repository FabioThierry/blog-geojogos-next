import { Article } from "@/lib/types/types";

type Props = {
  promise: Promise<Article>;
};

export default async function ArticlesInfo({ promise }: Props) {
  const data = await promise;

  return (
    <article key={data.id}>
      <h3>{data.title}</h3>
      <br />
      <hr />
      <div>
        <div>
          {data.blocks.map((block) => {
            if ("body" in block) {
              return <div key={block.id}>{block.body}</div>;
            }
            return null; // Retorna null para blocos que não possuem `body`
          })}
        </div>
      </div>
      <hr />
      <br />
    </article>
  );
}
