---
title: "Getting started"
description: "Hit the ground running."
date: "Mar 22 2024"
draft: true
---

The basic configuration of Nano is pretty simple.

Edit `src/consts.ts`

Customize the base site

```ts 
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Nano",
  EMAIL: "markhorn.dev@gmail.com",
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in header and footer. Used in SEO and RSS. |
| EMAIL | Yes | Displayed in contact section. |

Customize your page metadata

```ts 
// src/consts.ts

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| TITLE | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS. |

Customize your social media

```ts 
// src/consts.ts

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in contact section as a link. |
| HREF | Yes | External url to social media profile. |
