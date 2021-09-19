# L'accord parfait

https://laccordparfaitinstitut.com/ (in French 🇫🇷)

## Tech choices

- [Nuxt](https://nuxtjs.org/) - For this kind of website, static generation at build time is the most effective (good SEO out of the box, easy hosting, etc.). Having used [Gatsby](https://github.com/alexbensimon/maman) and [Next](https://github.com/alexbensimon/personal-website) before, I wanted to try SSG with Vue.
- [TypeScript](https://www.typescriptlang.org/) - For comfort.
- [Tailwind](https://tailwindcss.com/) - Now my go-to styling system. I feel very productive with it.
- [Prismic](https://prismic.io/) - A CMS is necessary to be able to modify the content of the website without having to touch the code. A headless CMS like Prismic gives us the flexibility of using our own frontend. Webhooks are used to trigger a build and deploy on Netlify when changes are made in the CMS.
- [Netlify](https://www.netlify.com/) - Easy and free hosting for static websites.
