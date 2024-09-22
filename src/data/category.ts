export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Technology",
    slug: "technology",
    color: "purple",
    description:
      "Keep up with the latest tech trends and learn about the latest innovations in software development, hardware design, cybersecurity, and more.",
  },
  {
    title: "Swimming",
    slug: "swimming",
    color: "blue",
    description:
      "Learn how to swim, improve your swimming technique, and have fun in the water with these tips and resources for swimmers of all levels.",
  },
  {
    title: "Personal",
    slug: "personal",
    color: "green",
    description:
      "Discover how to improve your personal development, build better habits, and achieve your goals with these resources and guides.",
  },
];
