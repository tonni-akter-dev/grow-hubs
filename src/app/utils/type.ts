export type Product = {
  title: string;
  description: string;
  icon: string;  // Since these are static imports, type can be StaticImageData if you use Next.js Image
  bgEffect: string;
  textEffect: string;
};
