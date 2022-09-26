##  Instagram with REACT.JS (Next.js, Tailwind CSS)
![insta](https://user-images.githubusercontent.com/97736654/192230759-e436dfb0-b7ef-4e5a-8e33-1d6d3918f16a.png)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

<img width="110" alt="image" src="https://user-images.githubusercontent.com/97736654/191726881-064bf8ab-6ee3-44dd-9f01-b94a98fca458.png">


##  Tailwind CSS


1. Install Tailwind CSS:
Install tailwindcss via npm, and create your tailwind.config.js file.
```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. Configure your template paths:
Add the paths to all of your template files in your tailwind.config.js file.

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add the Tailwind directives to your CSS:
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Start the Tailwind CLI build process:
Run the CLI tool to scan your template files for classes and build your CSS.

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
