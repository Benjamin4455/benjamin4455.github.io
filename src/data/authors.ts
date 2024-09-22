import benImage from "../assets/authors/ben.webp";

export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Ben Smith",
    slug: "ben-smith",
    image: benImage,
    bio: "Ben is a avid swimmer that enjoys candy cans and snorkeling.",
  },
];
