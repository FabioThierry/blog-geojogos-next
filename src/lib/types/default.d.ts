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

// export type ResponseData = {
//   data: Article[] | Category[] | Author[] | HeroSectionProps;
//   meta: Meta;
// };

export type ResponseData<T> = {
  data: T;
  meta: Meta;
};

// export type ArticleResponse = ResponseData<Article[]>;
// export type CategoryResponse = ResponseData<Category[]>;
// export type AuthorResponse = ResponseData<Author[]>;
// export type HeroSectionResponse = ResponseData<HeroSectionProps>;
