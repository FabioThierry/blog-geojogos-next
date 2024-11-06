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
