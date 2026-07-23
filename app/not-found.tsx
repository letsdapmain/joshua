import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div>
        <p className="eyebrow">404</p>
        <h1>That page is not in the case file.</h1>
        <p>
          Joshua&apos;s portfolio is currently a focused single-page experience. Use the main page to jump into engineering,
          DevRel, writing, and contact.
        </p>
        <Link href="/" className="button button-primary">
          Return home
        </Link>
      </div>
    </main>
  );
}
