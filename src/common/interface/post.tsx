export interface PostType {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  image?: string;
  context: (length: number) => string;
}
