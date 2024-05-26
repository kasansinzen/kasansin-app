# Kasansin App

This project is a personal profile showcasing my skills and passions. It serves multiple purposes:

1. Re-skilling in Next.js and React: I am using this project to refresh and enhance my knowledge of Next.js and React.
2. Advanced Learning in Firebase: I aim to deepen my understanding of Firebase by integrating it into this project.
3. Code Quality and Best Practices: I am incorporating various tools and techniques to ensure high code quality. This includes automated checks and testing.

## Features
- NextJS 14
- React 18
- Typescript
- Tailwind CSS 3 - Pre-setup with PostCSS Nesting and Import.
- Jest 29 - Typescript testing framework with unit-test and coverage
- Firebase - Google platform for web and mobile applications.
  - Hosting
  - Realtime Database
  - Storage
  - Google Analytics
- Husky - Run scripts on staged files before committed.
- EsLint - TypeaScript code linter for identifying and fixing problems.
- StyleLint - SCSS linter for enforcing consistent conventions.
- Prettier - Opinionated code formatter for various languages.
- Font Awesome - Icon toolkit for scalable vector icons.

## Structure
```
kasansin-app/
├── coverage/
├── node_modules/
├── public/
└── src/
    ├── @types/
    ├── app/
    ├── components/
    │   ├── bases/
    │   └── layouts/
    ├── hooks/
    ├── modules/
    │   └── profile/
    │       ├── components/
    │       └── Profile.tsx
    ├── providers
    └── utils/
        ├── helpers/
        └── services/
            └── firebases/
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Continue Integration

We use GitHub Actions to run our tests automatically on every push to the repository. The configuration is defined in .github/workflows/ci.yml.

Example workflow configuration:

```
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Setup NodeJS
        uses: actions/setup-node@v2
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm install

      - name: Build application
        run: npm run build

      - name: ESLint and Prettierrc
        run: npm run lint
      
      - name: Stylelint
        run: npm run stylelint

      - name: Unit Test
        run: npm run test:ci
```
