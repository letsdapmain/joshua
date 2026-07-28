import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("portfolio has the expected identity, metadata, and content", async () => {
  const [page, layout] = await Promise.all([
    read("app/page.tsx"),
    read("app/layout.tsx"),
  ]);

  // Title / social metadata
  assert.match(
    layout,
    /Joshua Nwankwo \| Product Engineer and Developer Relations Engineer/,
  );
  assert.match(layout, /og\.png/);

  // Hero + disciplines
  assert.match(page, /Joshua/);
  assert.match(page, /Nwankwo/);
  assert.match(page, /Developer relations/i);

  // Selected work
  assert.match(page, /Letsdap/);
  assert.match(page, /Spheron Network/);
  assert.match(page, /Hype Partners/);

  // Assets + contact
  assert.match(page, /joshua-hero\.jpg/);
  assert.match(page, /joshua-techpoint\.webp/);
  assert.match(page, /mailto:u\.joshuanwankwo@gmail\.com/);
});

test("no starter/scaffold leftovers remain", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    read("app/page.tsx"),
    read("app/layout.tsx"),
    read("app/globals.css"),
    read("package.json"),
  ]);

  for (const source of [page, layout, css]) {
    assert.doesNotMatch(
      source,
      /_sites-preview|codex-preview|react-loading-skeleton|Starter Project/i,
    );
  }
  assert.doesNotMatch(
    packageJson,
    /vinext|@cloudflare\/vite-plugin|react-loading-skeleton/,
  );

  // SEO / routing files still present
  await Promise.all([
    access(new URL("app/robots.ts", root)),
    access(new URL("app/sitemap.ts", root)),
    access(new URL("app/not-found.tsx", root)),
  ]);
});
