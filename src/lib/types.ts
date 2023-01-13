// Layout
export type CustomMeta = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  siteName?: string;
  date?: string;
};

// Header Component
export type NavigationLink = {
  name: string;
  href: string;
};

// Footer Component
export type SocialLink = {
  href: string;
  title: string;
  pack?: string;
  name: string;
};
