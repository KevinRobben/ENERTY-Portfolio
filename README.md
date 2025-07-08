# Hugo Agency Web

![Screenshot](https://github.com/writeonlycode/hugo-agency-web/blob/main/images/screenshot.png?raw=true)

**Hugo Agency Web** is a clean and professional [Hugo](https://gohugo.io/) theme for digital agencies, startups, and modern product landing pages.

## Live Demo

👉 [Visit the Live Demo](https://writeonlycode.github.io/hugo-agency-web/)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

* [Hugo](https://gohugo.io/getting-started/installing/)
* [Go](https://go.dev/doc/install)
* [Node.js](https://nodejs.org/)
* npm (comes with Node.js)

### Installation

1. Clone the repository using the `demo` branch:

```bash
git clone --depth 1 --branch demo https://github.com/writeonlycode/hugo-agency-web.git my-new-site
cd my-new-site
```

2. Install the dependencies:

```bash
npm install
```

3. Start the local development server:

```bash
hugo server
```

Your site will be running at `http://localhost:1313`. Any changes you make will be hot-reloaded in the browser.

### Editing Content

* All content is stored in the `content/` and `data/` directories.
* To update configuration settings, **modify only the files inside the `config/` folder**, which uses Hugo’s [configuration directory](https://gohugo.io/getting-started/configuration/#configuration-directory) structure.
* YAML files inside `data/` are used for structured sections like the hero, features, and pricing.

### Deployment

To deploy your site, build the static files:

```bash
hugo
```

This will generate the `public/` directory, which contains the complete static site. Upload its contents to your hosting provider or connect with a platform like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

## Built With

* [Hugo](https://gohugo.io/) – A fast and flexible static site generator.
* [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework for rapid UI development.
* [Agency Web by Sanoj Dilshan](https://www.figma.com/community/file/1058767686059595687) – The design inspiration behind the theme.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
