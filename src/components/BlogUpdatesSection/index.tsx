import { formatDateToLong } from "@/lib/formatDate";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";

/**
 * The BlogUpdatesSection component renders a section displaying a list of blog articles.
 *
 * @prop {Articles[]} props - The list of articles to display.
 * @prop {boolean} [text] - Optional flag to display a heading "Últimas Postagens".
 *
 * The component displays each article in a card format with the title, category, description,
 * author, and updated date. The articles are displayed in reverse order.
 */
export default function BlogUpdatesSection({
  props,
  text,
}: {
  props: Articles[];
  text?: boolean;
}) {
  return (
    <section id="updates" className="my-12 container mx-auto px-4">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          {text === true ? "Últimas Postagens" : " "}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {props.reverse().map((article) => (
            <MagicCard
              key={article.id}
              gradientColor="#f0fdf4"
              className="cursor-pointer flex-col items-center justify-center rounded-xl border bg-card text-card-foreground shadow-xl "
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {article.title}
                </CardTitle>
                <CardDescription>
                  <Badge className="my-2" variant="default">
                    {article.category.name}{" "}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{article.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-baseline flex-wrap flex-col justify-between content-end">
                  <Badge variant="outline" className="mb-2">
                    {article.author.name}
                  </Badge>
                  <Badge variant="secondary">
                    {formatDateToLong(article.updatedAt)}
                  </Badge>
                </div>
              </CardFooter>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
