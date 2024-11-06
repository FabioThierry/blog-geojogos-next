// TODO Move to Lib and create a File Definitions.ts
// types.d.ts nao necessita de escrever o import e o export?

type Article = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
  author: Author;
  category: Category;
  blocks: Block[];
};

type Author = {
  id: number;
  documentId: string;
  name: string;
  email: string | null;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Category = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
