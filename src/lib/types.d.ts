// Typescript types for the data that is retrieved from Strapi.

// Components

type Link = {
  id: number;
  url: string;
  label: string;
};

// Layout

type HeroSectionProps = {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  link: Link;
};

type HomePage = {
  id: number;
  documentId: string;
  title: string;
  description: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: HeroSectionProps[];
};

// Shared

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

// Collection

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

// Single

// Default

type Image = {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
};

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

type MetaPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Meta = {
  pagination: MetaPagination;
};

type ResponseData<T> = {
  data: T;
  meta: Meta;
};

// export type ResponseData = {
//   data: Article[] | Category[] | Author[] | HeroSectionProps;
//   meta: Meta;
// };
// export type ArticleResponse = ResponseData<Article[]>;
// export type CategoryResponse = ResponseData<Category[]>;
// export type AuthorResponse = ResponseData<Author[]>;
// export type HeroSectionResponse = ResponseData<HeroSectionProps>;
