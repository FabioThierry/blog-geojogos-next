// TODO Move to Lib and create a File Definitions.ts
// types.d.ts nao necessita de escrever o import e o export?

type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

type Cover = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Author = {
  id: number;
  documentId: string;
  name: string;
  email: string | null;
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

type RichTextBlock = {
  __component: "shared.rich-text";
  id: number;
  body: string;
};

type QuoteBlock = {
  __component: "shared.quote";
  id: number;
  title: string;
  body: string;
};

type SliderBlock = {
  __component: "shared.slider";
  id: number;
};

type Block = RichTextBlock | QuoteBlock | SliderBlock;

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

type MetaPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Meta = {
  pagination: MetaPagination;
};

export type ResponseData = {
  data: Article[];
  meta: Meta;
};
