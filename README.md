# gthmk.dev

**Gautham Koorma’s Personal Blog** — built using a modern, minimal, and performance-optimized stack designed for speed, readability, and developer experience.

## 🛠️ Tech Stack

- [Astro](https://astro.build/) – Modern static site builder
- [Astro Nano](https://github.com/markhorn-dev/astro-nano) – Minimalist blog theme
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Bun](https://bun.sh) – Ultra-fast all-in-one JavaScript runtime
- [Vercel](https://vercel.com/) – Frontend hosting and CI/CD platform

---

## 🚀 Features (inherited from Astro Nano)

- ✅ Responsive and accessible design
- ✅ SEO-optimized and metadata-rich
- ✅ TypeScript + Markdown + MDX support
- ✅ Minimalist light/dark UI toggle
- ✅ Animated interactions (Framer Motion)
- ✅ Auto-generated sitemap and RSS feed

---

## 💻 Local Development

All commands are run from the root of the project using [Bun](https://bun.sh):

| Command                  | Description                                       |
| :----------------------- | :------------------------------------------------ |
| `bun install`            | Installs dependencies                            |
| `bun dev`                | Starts local dev server at `http://localhost:4321` |
| `bun run build`          | Builds the site for production to `./dist/`      |
| `bun run preview`        | Previews the built site locally                  |
| `bun run astro ...`      | Run Astro CLI commands (e.g., `astro check`)     |
| `bun run lint`           | Run ESLint checks                                |
| `bun run lint:fix`       | Auto-fix linting issues                          |

---

## 📄 Content Structure

Content lives in the `src/content/` directory. Blog posts are authored in Markdown (`.md`) or MDX (`.mdx`), allowing you to embed React-like components in markdown files.

---

## ⚙️ Deployment

Deployed via [Vercel](https://vercel.com/), which automatically builds the project using Bun and serves the site from the `main` branch.

To deploy manually:
1. Push changes to the `main` branch
2. Vercel will detect the update and trigger a new build

---

## 📫 Author

**Gautham Koorma**  
[Website](https://gthmk.dev) | [LinkedIn](https://www.linkedin.com/in/gthmk) | [GitHub](https://github.com/gthmk)

---

> ⚡ Powered by [Bun](https://bun.sh) and [Astro](https://astro.build).  
> ✨ Built with simplicity, speed, and clean design in mind.