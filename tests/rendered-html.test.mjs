import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);
const previewRoot = new URL("../app/_sites-preview/", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Joshua's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Joshua Nwankwo \| Product Engineer and Developer Relations Engineer<\/title>/i);
  assert.match(html, /Joshua Nwankwo/);
  assert.match(html, /builds products/);
  assert.match(html, /explain themselves/);
  assert.match(html, /Product Engineering/);
  assert.match(html, /Developer Relations/);
  assert.match(html, /AI tooling/);
  assert.match(html, /joshua-hero\.jpg/);
  assert.match(html, /joshua-techpoint\.webp/);
  assert.match(html, /Letsdap/);
  assert.match(html, /Spheron Network/);
  assert.match(html, /Hype Partners/);
  assert.match(html, /Buildspace Africa/);
  assert.match(html, /Click to expand/);
  assert.match(html, /A compact index of shipped proof/);
  assert.match(html, /150\+/);
  assert.match(html, /TechNext24/);
  assert.match(html, /Techpoint Africa/);
  assert.match(html, /mailto:u\.joshuanwankwo@gmail\.com/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site|Starter Project|codex-preview/i);
  assert.doesNotMatch(html, /react-loading-skeleton/);
  assert.doesNotMatch(html, /Available immediately|Open to relocation|tickets issued|evenings and weekends/i);
  assert.doesNotMatch(html, /Hype Builds/i);
});

test("keeps starter files and metadata out of the portfolio", async () => {
  const [page, layout, css, packageJson, previewFiles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(previewRoot).catch(() => []),
  ]);

  assert.deepEqual(previewFiles.sort(), []);
  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview|codex-preview/i);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/i);
  assert.doesNotMatch(css, /sites-skeleton|react-loading-skeleton/i);
  assert.doesNotMatch(packageJson, /site-creator-vinext-starter|react-loading-skeleton/i);
  await readFile(new URL("app/robots.ts", templateRoot), "utf8");
  await readFile(new URL("app/sitemap.ts", templateRoot), "utf8");
  await readFile(new URL("app/not-found.tsx", templateRoot), "utf8");
});
