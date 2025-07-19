export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: "GitHub" | "LinkedIn" | "X" | "Mail" | "Gumroad";
  href: string;
  linkTitle: string;
  active: boolean;
}[];

export const SITE: Site = {
  website: "https://tymm-kay.vercel.app/",
  author: "Timothy Kyalo",
  desc: "Internet home of Timothy Kyalo, a Construction Manager.",
  title: "Timothy Kyalo",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "GitHub",
    href: "https://github.com/TymmKay",
    linkTitle: `${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/timothy-kyalo-3934b4147/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:Timothykyalo47@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/ProjMgrTim?t=AWg4DuVm3YXOM0Tt4dfD-w&s=09",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Gumroad",
    href: "https://timokyaloprojects.gumroad.com",
    linkTitle: `${SITE.title} on Gumroad`,
    active: false,
  },
];