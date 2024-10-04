export type ProductType = {
  id: number;
  slug: string;
  productName: string;
  genero: string;
  category: string;
  description: string;
  images: {
      id: number;
      url: string;
  }
};