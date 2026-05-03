# Zaphenath - Senior Frontend Engineer Portfolio

A modern, high-performance, and accessible personal portfolio website built with Next.js, React 19, and Tailwind CSS. It is designed to showcase projects, experience, and skills while adhering to best practices in web development, including SEO optimization and responsive design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js App Router and React 19.
- **Beautiful UI/UX**: Styled with Tailwind CSS v4 and Radix UI primitives (shadcn/ui).
- **Animations**: Smooth page transitions and micro-interactions powered by Framer Motion.
- **Fully Responsive**: Optimized for seamless viewing across all devices (mobile, tablet, desktop).
- **SEO Optimized**: Includes JSON-LD structured data schema, canonical URLs, and dynamic metadata.
- **Dark/Light Mode**: Full theme support via `next-themes`.
- **Accessible**: Built with accessibility in mind, leveraging Radix UI's accessible primitives.

## 💻 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & shadcn/ui patterns
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form & Zod
- **Language**: TypeScript

## 📂 Project Structure

```text
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable React components
│   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   └── ui/               # Core UI components (buttons, inputs, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets (images, icons)
└── styles/               # Global CSS files
```

## 🛠️ Getting Started

First, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/zaph123/my-portfolio.git

# Navigate into the directory
cd my-portfolio

# Install dependencies (using pnpm, npm, or yarn)
pnpm install
```

Next, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📈 SEO & Performance

This project implements strict SEO best practices:
- **Semantic HTML**: Proper heading structure and semantic tags.
- **Structured Data**: `JSON-LD` implementation for better search engine understanding.
- **Optimized Assets**: Usage of Next.js Image component for automatic image optimization.
- **Web Vitals**: Optimized for Core Web Vitals to ensure fast load times and smooth interactions.

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are always welcome! Feel free to open an issue or submit a pull request if you notice any bugs or improvements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
