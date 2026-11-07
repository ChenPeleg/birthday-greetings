# Birthday Greetings 🎂

A template site for creating and sharing beautiful birthday greeting pages.

## Overview

This project provides a collection of ready-made birthday greeting pages that you can use as a starting point for sending personalized birthday wishes. It includes 8 different greeting styles, a shared context for customizing the recipient's name and message, and a navigation bar to browse between greetings.

## Features

- 8 unique birthday greeting page designs
- Shared greeting context (recipient name, message, etc.) across all pages
- Built with [React](https://react.dev/) and [Vite](https://vite.dev/) for fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Client-side routing via [React Router](https://reactrouter.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Make your own greeting

1. Create your own copy of this repository using **Use this template** on GitHub (or fork it).
2. Install the dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local site and use the navigation to choose one of the eight designs.
4. Open `src/config/greetings.ts` and find the entry whose `id` matches your chosen design. Edit its `heading` and `message` with the recipient's name and your personalized wish. For example:

   ```ts
   heading: 'Happy Birthday, Alex!',
   message: 'Hope your day is full of joy. With love, Sam!'
   ```

   Keep the rest of the entry unchanged. Each design uses the corresponding entry with `id` 1–8. Replace the sample text in your chosen entry, including the personal text in the fireworks greeting (`id: 7`), before sharing your copy.
5. Save the file and check the result in the browser. When you're ready to publish, run `npm run build`.

The included GitHub Actions workflow deploys the site when you push to the `main` branch. In your copy's repository settings, enable GitHub Pages and select **GitHub Actions** as the build and deployment source.

## Project Structure

```
src/
├── components/     # Shared UI components and backgrounds
├── config/         # Greeting text and design settings
├── context/        # Shared greeting context
├── pages/          # Individual greeting pages (Greeting1 – Greeting8)
├── App.tsx         # Root component with routing
└── main.tsx        # Application entry point
```

## License

This project is open source and available under the [MIT License](LICENSE).
