import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "gthmk.dev", 
  EMAIL: "markhorn.dev@gmail.com",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "GK's home page",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "GK's blog",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "GK's CV",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "GK's projects",
};

export const SOCIALS: Socials = [
  { 
    NAME: "email",
    HREF: "mailto:hi@gthmk.dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/gthmk"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gauthamsk",
  }
];
