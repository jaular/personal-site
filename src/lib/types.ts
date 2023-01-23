// Layout
export type CustomMeta = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  siteName?: string;
  twitterUser?: string;
  date?: string;
};

// Header data
export type NavigationLink = {
  name: string;
  href: string;
};

// Social Links data
export type SocialLink = {
  href: string;
  title: string;
  pack?: string;
  name: string;
};

// My Skills data
export type Skill = {
  name: string;
  href: string;
  iconName: string;
};

// Projects data
export type Project = {
  title: string;
  href: string;
  imageUrl: string;
};

// All tags data
export type Tag = "redes" | "cisco" | "ts" | "js";

// Pagination pages
export type Page = {
  size: number;
  total: number;
  currentPage: number;
  lastPage: number;
  url: {
    current: string;
    next?: string;
    prev?: string;
  };
};
