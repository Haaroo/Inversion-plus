export type ProductType = {
  id: number;
  slug: string;
  productName: string;
  genero: string;
  category: string;
  description: string;
  origin: string;
  taste: string;
  images: {
      data: any;
      id: number;
      url: string;
  }
};