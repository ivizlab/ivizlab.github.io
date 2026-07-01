import markdownIt from "markdown-it";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

export default function (eleventyConfig) {

  // YAML is not loaded by default in Eleventy 3.x — must be registered explicitly.
  eleventyConfig.addDataExtension("yml, yaml", (contents) => yaml.load(contents));


  // ---------------------------------------------------------------------------
  // Passthrough copy
  // ---------------------------------------------------------------------------
  // These directories are copied verbatim from src/ to dist/ without any
  // processing. Jekyll did this automatically for anything not prefixed with _.
  // In 11ty you declare it explicitly, which makes the intent clear.
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  // CSS is NOT passthrough-copied — the Sass build step compiles it directly
  // into docs/assets/css/, so 11ty never needs to touch it.

  // .nojekyll tells GitHub Pages not to run Jekyll on the docs/ output folder.
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // ---------------------------------------------------------------------------
  // Markdown library
  // ---------------------------------------------------------------------------
  // 11ty uses markdown-it by default. We configure it here to match what
  // Jekyll's kramdown was doing.
  // html: true  → allows raw HTML inside Markdown blocks
  //               (equivalent to kramdown's parse_block_html: true)
  // linkify     → auto-links bare URLs
  // typographer → smart quotes, dashes (kramdown did this too)
  const md = markdownIt({ html: true, linkify: true, typographer: true });
  eleventyConfig.setLibrary("md", md);

  // ---------------------------------------------------------------------------
  // Filters
  // ---------------------------------------------------------------------------
  // markdownify: render a Markdown string to HTML.
  // Jekyll had this built-in; 11ty doesn't, so we add it ourselves.
  // Used in news.html to render article.info, which is stored as Markdown in YAML.
  eleventyConfig.addFilter("markdownify", (str) => md.render(str ?? ""));

  // url_encode: percent-encode a string for use in a URL query parameter.
  // Used in publications.md to build Google Scholar search links.
  // Jekyll had this built-in as a Liquid filter; in 11ty we wire it to the
  // native JS function.
  eleventyConfig.addFilter("url_encode", (str) => encodeURIComponent(str ?? ""));

  // limit: return the first n items of an array.
  // Nunjucks has no built-in limit modifier on for loops (Liquid does), so we add it.
  // Usage: {% for item in news | limit(5) %}
  eleventyConfig.addFilter("limit", (arr, n) => (arr ?? []).slice(0, n));

  // contains: check if a string includes a substring.
  // Replaces Jekyll's Liquid `contains` operator used in research pages to filter publist.
  // Usage: {% if publi.research | contains(researchTag) %}
  eleventyConfig.addFilter("contains", (str, val) => str != null && String(str).includes(val));

  // ---------------------------------------------------------------------------
  // Return config
  // ---------------------------------------------------------------------------
  return {
    dir: {
      input: "src",           // All source files live here — keeps root clean
      output: "docs",         // Build output — GitHub Pages serves from this folder
      includes: "_includes",  // src/_includes/ — partials and components
      layouts: "_includes/layouts",  // src/_includes/layouts/ — page layouts
      data: "_data",          // src/_data/ — YAML/JSON data files
    },
    // These two lines tell 11ty to run Nunjucks on .md and .html files before
    // processing them. This lets you use {% %} template tags inside Markdown
    // content pages — the same thing Jekyll's Liquid preprocessing did.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
