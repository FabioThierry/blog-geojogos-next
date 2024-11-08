import Image from "next/image";
import { CalendarIcon, ClockIcon } from "lucide-react";

type Props = {
  articles: Article[];
};

export default function index({ articles }: Props) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Publicações mais recentes</h2>
        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              {article.cover ? (
                <Image
                  src={article.cover.url}
                  alt={article.cover.name || `Capa de ${article.title}`}
                  width={250}
                  height={150}
                  className="w-full md:w-1/4 h-48 md:h-auto object-cover rounded-lg"
                />
              ) : (
                <Image
                  src="/file.svg"
                  alt="Placeholder image"
                  width={250}
                  height={150}
                  className="w-full md:w-1/4 h-48 md:h-auto object-cover rounded-lg"
                />
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(article.createdAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {/* Tempo de leitura estimado ou outra informação */}5 min
                    read
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
